#!/usr/bin/env python3
"""
Daily Upload Script
Simple script for daily batch uploads with minimal interaction
"""

import os
import sys
import json
import argparse
from datetime import datetime, timedelta
from pathlib import Path
from upload_video.youtube_uploader import YouTubeUploader, save_upload_log

# Add the project root to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def get_today_videos(dist_dir='.dist'):
    """Get today's video files"""
    today = datetime.now().strftime('%Y-%m-%d')
    video_dir = Path(dist_dir)
    
    if not video_dir.exists():
        print(f"Directory not found: {dist_dir}")
        return []
    
    # Look for today's videos
    today_videos = list(video_dir.glob(f'{today}.mp4'))
    
    if not today_videos:
        # Look for videos from the last 3 days if no today's videos
        for i in range(1, 4):
            date = (datetime.now() - timedelta(days=i)).strftime('%Y-%m-%d')
            videos = list(video_dir.glob(f'{date}.mp4'))
            if videos:
                print(f"No videos found for today, using videos from {date}")
                return videos
    
    return today_videos

def get_recent_videos(dist_dir='.dist', days=1):
    """Get videos from the last N days"""
    video_dir = Path(dist_dir)
    recent_videos = []
    
    for i in range(days):
        date = (datetime.now() - timedelta(days=i)).strftime('%Y-%m-%d')
        videos = list(video_dir.glob(f'{date}.mp4'))
        recent_videos.extend(videos)
    
    return sorted(recent_videos)

def check_uploaded_videos():
    """Check which videos have already been uploaded"""
    uploaded_log_file = 'upload_video/uploaded_videos.json'
    if os.path.exists(uploaded_log_file):
        with open(uploaded_log_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def main():
    parser = argparse.ArgumentParser(description='Daily YouTube Upload')
    parser.add_argument('--today', action='store_true', help='Upload today\'s videos only')
    parser.add_argument('--recent', type=int, default=1, help='Upload videos from last N days')
    parser.add_argument('--privacy', default='private', choices=['private', 'public', 'unlisted'])
    parser.add_argument('--dist-dir', default='.dist', help='Video directory')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be uploaded without actually uploading')
    
    args = parser.parse_args()
    
    print("🎬 Daily YouTube Upload Script")
    print("=" * 40)
    
    # Get videos to upload
    if args.today:
        videos = get_today_videos(args.dist_dir)
        print(f"Looking for today's videos...")
    else:
        videos = get_recent_videos(args.dist_dir, args.recent)
        print(f"Looking for videos from last {args.recent} day(s)...")
    
    if not videos:
        print("❌ No videos found to upload")
        return 1
    
    print(f"📹 Found {len(videos)} video(s):")
    for video in videos:
        print(f"  - {video.name}")
    
    # Check which videos are already uploaded
    uploaded_videos = check_uploaded_videos()
    new_videos = [v for v in videos if v.name not in uploaded_videos]
    
    if not new_videos:
        print("✅ All videos are already uploaded!")
        print("\n📊 Upload Status:")
        for video in videos:
            if video.name in uploaded_videos:
                info = uploaded_videos[video.name]
                print(f"  ✅ {video.name} - {info['video_url']}")
        return 0
    
    print(f"\n🆕 Found {len(new_videos)} new video(s) to upload:")
    for video in new_videos:
        print(f"  - {video.name}")
    
    if args.dry_run:
        print("\n🔍 DRY RUN - No actual uploads will be performed")
        return 0
    
    # Confirm upload
    if not args.today:  # Skip confirmation for today's videos
        response = input(f"\n📤 Upload {len(new_videos)} video(s) as {args.privacy}? (y/N): ")
        if response.lower() not in ['y', 'yes']:
            print("❌ Upload cancelled")
            return 0
    
    # Initialize uploader
    uploader = YouTubeUploader()
    
    # Authenticate
    print("\n🔐 Authenticating with YouTube...")
    if not uploader.authenticate():
        print("❌ Authentication failed")
        return 1
    
    # Load configuration
    config_file = 'upload_video/upload_config.json'
    config = {}
    if os.path.exists(config_file):
        with open(config_file, 'r', encoding='utf-8') as f:
            config = json.load(f)
    
    # Upload videos
    uploaded_count = 0
    failed_count = 0
    
    for video_path in new_videos:
        print(f"\n📤 Uploading: {video_path.name}")
        
        # Find corresponding subtitle file
        subtitle_path = video_path.with_suffix('.srt')
        if not subtitle_path.exists():
            subtitle_path = None
        
        # Generate title
        title = config.get('title_template', 'Daily Video - {filename}').format(
            filename=video_path.stem,
            date=datetime.now().strftime('%Y-%m-%d')
        )
        
        # Upload video
        video_id = uploader.upload_video(
            video_path=str(video_path),
            title=title,
            description=config.get('description', ''),
            tags=config.get('tags', []),
            privacy_status=args.privacy,
            subtitle_path=str(subtitle_path) if subtitle_path else None,
            playlist_ids=config.get('playlists', [])
        )
        
        if video_id:
            save_upload_log(str(video_path), video_id)
            uploaded_count += 1
            print(f"✅ Successfully uploaded: {title}")
            print(f"🔗 URL: https://www.youtube.com/watch?v={video_id}")
        else:
            failed_count += 1
            print(f"❌ Failed to upload: {video_path.name}")
        
        # Add delay between uploads
        if uploaded_count > 0 and uploaded_count % 3 == 0:
            print("⏳ Waiting 30 seconds...")
            import time
            time.sleep(30)
    
    # Summary
    print(f"\n📈 Upload Summary:")
    print(f"  ✅ Successful: {uploaded_count}")
    print(f"  ❌ Failed: {failed_count}")
    print(f"  📊 Total: {len(new_videos)}")
    
    return 0 if failed_count == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
