#!/usr/bin/env python3
"""
Playlist Management Utility
Utility script to manage YouTube playlists
"""

import os
import sys
import json
import argparse
from datetime import datetime
from pathlib import Path

# Add the project root to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from upload_video.youtube_uploader import YouTubeUploader

def list_playlists(uploader):
    """List all playlists for the authenticated channel"""
    if not uploader.youtube_service:
        print("❌ Not authenticated")
        return False
    
    try:
        print("📋 Fetching playlists...")
        request = uploader.youtube_service.playlists().list(
            part='snippet,contentDetails',
            mine=True,
            maxResults=50
        )
        
        response = request.execute()
        playlists = response.get('items', [])
        
        if not playlists:
            print("❌ No playlists found")
            return False
        
        print(f"✅ Found {len(playlists)} playlist(s):")
        print()
        
        for playlist in playlists:
            title = playlist['snippet']['title']
            playlist_id = playlist['id']
            video_count = playlist['contentDetails']['itemCount']
            created = playlist['snippet']['publishedAt'][:10]
            
            print(f"📋 {title}")
            print(f"   ID: {playlist_id}")
            print(f"   Videos: {video_count}")
            print(f"   Created: {created}")
            print(f"   URL: https://www.youtube.com/playlist?list={playlist_id}")
            print()
        
        return True
        
    except Exception as e:
        print(f"❌ Error fetching playlists: {e}")
        return False

def get_playlist_videos(uploader, playlist_id):
    """Get videos in a specific playlist"""
    if not uploader.youtube_service:
        print("❌ Not authenticated")
        return False
    
    try:
        print(f"📋 Fetching videos from playlist {playlist_id}...")
        
        # Get playlist info first
        playlist_info = uploader.get_playlist_info(playlist_id)
        if playlist_info:
            print(f"Playlist: {playlist_info['title']}")
            print(f"Total videos: {playlist_info['video_count']}")
            print()
        
        request = uploader.youtube_service.playlistItems().list(
            part='snippet',
            playlistId=playlist_id,
            maxResults=50
        )
        
        response = request.execute()
        items = response.get('items', [])
        
        if not items:
            print("❌ No videos found in playlist")
            return False
        
        print(f"📹 Videos in playlist:")
        for i, item in enumerate(items, 1):
            title = item['snippet']['title']
            video_id = item['snippet']['resourceId']['videoId']
            published = item['snippet']['publishedAt'][:10]
            
            print(f"{i:2d}. {title}")
            print(f"     Video ID: {video_id}")
            print(f"     Added: {published}")
            print(f"     URL: https://www.youtube.com/watch?v={video_id}")
            print()
        
        return True
        
    except Exception as e:
        print(f"❌ Error fetching playlist videos: {e}")
        return False

def test_playlist_config():
    """Test the current playlist configuration"""
    config_file = 'upload_video/upload_config.json'
    if not os.path.exists(config_file):
        print(f"❌ Configuration file not found: {config_file}")
        return False
    
    with open(config_file, 'r', encoding='utf-8') as f:
        config = json.load(f)
    
    playlists = config.get('playlists', [])
    if not playlists:
        print("❌ No playlists configured")
        return False
    
    print("📋 Configured playlists:")
    for i, playlist_id in enumerate(playlists, 1):
        print(f"{i}. {playlist_id}")
        print(f"   URL: https://www.youtube.com/playlist?list={playlist_id}")
    
    return True

def add_existing_video_to_playlists(uploader, video_id, playlist_ids):
    """Add an existing video to playlists"""
    if not uploader.youtube_service:
        print("❌ Not authenticated")
        return False
    
    print(f"📤 Adding video {video_id} to playlists...")
    
    added_playlists = uploader.add_video_to_playlists(video_id, playlist_ids)
    
    if added_playlists:
        print(f"✅ Successfully added video to {len(added_playlists)} playlist(s)")
        for playlist_info in added_playlists:
            print(f"  - Playlist ID: {playlist_info['playlist_id']}")
        return True
    else:
        print("❌ Failed to add video to playlists")
        return False

def main():
    parser = argparse.ArgumentParser(description='YouTube Playlist Manager')
    parser.add_argument('--list', action='store_true', help='List all playlists')
    parser.add_argument('--playlist', help='Show videos in specific playlist')
    parser.add_argument('--test-config', action='store_true', help='Test current playlist configuration')
    parser.add_argument('--add-video', help='Add existing video to configured playlists')
    
    args = parser.parse_args()
    
    if not any([args.list, args.playlist, args.test_config, args.add_video]):
        parser.print_help()
        return 1
    
    print("🎬 YouTube Playlist Manager")
    print("=" * 40)
    
    if args.test_config:
        test_playlist_config()
        return 0
    
    # Initialize uploader for API operations
    uploader = YouTubeUploader()
    
    # Authenticate
    print("🔐 Authenticating...")
    if not uploader.authenticate():
        print("❌ Authentication failed")
        return 1
    
    print("✅ Successfully authenticated")
    print()
    
    if args.list:
        list_playlists(uploader)
    
    elif args.playlist:
        get_playlist_videos(uploader, args.playlist)
    
    elif args.add_video:
        # Load playlist IDs from config
        config_file = 'upload_video/upload_config.json'
        playlist_ids = []
        
        if os.path.exists(config_file):
            with open(config_file, 'r', encoding='utf-8') as f:
                config = json.load(f)
                playlist_ids = config.get('playlists', [])
        
        if not playlist_ids:
            print("❌ No playlists configured")
            return 1
        
        add_existing_video_to_playlists(uploader, args.add_video, playlist_ids)
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
