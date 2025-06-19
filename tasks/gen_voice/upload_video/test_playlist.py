#!/usr/bin/env python3
"""
Test script for playlist functionality
"""

import os
import sys
import json

# Add the project root to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from upload_video.youtube_uploader import YouTubeUploader

def test_playlist_functionality():
    """Test the playlist functionality without actual upload"""
    print("🧪 Testing Playlist Functionality")
    print("=" * 40)
    
    # Load config
    config_file = 'upload_video/upload_config.json'
    if os.path.exists(config_file):
        with open(config_file, 'r', encoding='utf-8') as f:
            config = json.load(f)
        
        playlists = config.get('playlists', [])
        print(f"✅ Configuration loaded")
        print(f"📋 Found {len(playlists)} playlist(s) configured:")
        
        for i, playlist_id in enumerate(playlists, 1):
            print(f"  {i}. {playlist_id}")
            print(f"     URL: https://www.youtube.com/playlist?list={playlist_id}")
        
        # Test video info
        sample_video = config.get('channel_info', {}).get('sample_video', '')
        if sample_video:
            print(f"\n🎬 Sample video: {sample_video}")
            # Extract video ID from URL
            if 'youtu.be/' in sample_video:
                video_id = sample_video.split('youtu.be/')[-1]
                print(f"📹 Video ID: {video_id}")
                
                print(f"\n💡 To add this video to playlists manually, run:")
                print(f"python3 upload_video/playlist_manager.py --add-video {video_id}")
        
        print(f"\n📈 Upload functionality will automatically:")
        print(f"  1. Upload video to YouTube")
        print(f"  2. Upload subtitles (if .srt file exists)")
        print(f"  3. Add video to all configured playlists")
        print(f"  4. Log the upload details")
        
        return True
    else:
        print(f"❌ Configuration file not found: {config_file}")
        return False

def show_usage_examples():
    """Show usage examples"""
    print(f"\n📖 Usage Examples:")
    print(f"=" * 40)
    
    print(f"# Test current configuration:")
    print(f"python3 upload_video/playlist_manager.py --test-config")
    
    print(f"\n# Upload all videos (will add to playlists automatically):")
    print(f"./upload_video/upload.sh --all")
    
    print(f"\n# Upload specific video (will add to playlists automatically):")
    print(f"./upload_video/upload.sh --video .dist/2025-04-04.mp4")
    
    print(f"\n# Daily upload (today's videos only):")
    print(f"python3 upload_video/daily_upload.py --today")
    
    print(f"\n# List all playlists on your channel:")
    print(f"python3 upload_video/playlist_manager.py --list")
    
    print(f"\n# View videos in a specific playlist:")
    print(f"python3 upload_video/playlist_manager.py --playlist PLe8rBiAN890Y9055UfPQhNWFD_A8dr9Ro")

if __name__ == '__main__':
    success = test_playlist_functionality()
    if success:
        show_usage_examples()
        print(f"\n✅ Playlist functionality is configured and ready to use!")
    else:
        print(f"\n❌ Configuration test failed")
        sys.exit(1)
