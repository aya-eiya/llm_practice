#!/usr/bin/env python3
"""
YouTube Video Uploader Script
Uploads video files from .dist directory to YouTube using YouTube Data API v3
"""

import os
import sys
import json
import argparse
import logging
from datetime import datetime
from pathlib import Path
import pickle
import google.auth.transport.requests
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

# YouTube API settings
SCOPES = [
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube'
]
API_SERVICE_NAME = 'youtube'
API_VERSION = 'v3'

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('upload_video/upload.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

class YouTubeUploader:
    def __init__(self, credentials_file='upload_video/credentials.json', token_file='upload_video/token.pickle'):
        self.credentials_file = credentials_file
        self.token_file = token_file
        self.youtube_service = None
        
    def authenticate(self):
        """Authenticate with YouTube API"""
        credentials = None
        
        # Load existing token
        if os.path.exists(self.token_file):
            with open(self.token_file, 'rb') as token:
                credentials = pickle.load(token)
        
        # If there are no valid credentials available, request authorization
        if not credentials or not credentials.valid:
            if credentials and credentials.expired and credentials.refresh_token:
                credentials.refresh(Request())
            else:
                if not os.path.exists(self.credentials_file):
                    logger.error(f"Credentials file not found: {self.credentials_file}")
                    logger.error("Please download OAuth 2.0 credentials from Google Cloud Console")
                    return False
                
                flow = InstalledAppFlow.from_client_secrets_file(
                    self.credentials_file, SCOPES)
                credentials = flow.run_local_server(port=0)
            
            # Save credentials for next run
            with open(self.token_file, 'wb') as token:
                pickle.dump(credentials, token)
        
        self.youtube_service = build(API_SERVICE_NAME, API_VERSION, credentials=credentials)
        logger.info("Successfully authenticated with YouTube API")
        return True
    
    def upload_video(self, video_path, title=None, description=None, tags=None,
                    category_id="22", privacy_status="private", subtitle_path=None, playlist_ids=None):
        """
        Upload a video to YouTube
        
        Args:
            video_path: Path to video file
            title: Video title (defaults to filename)
            description: Video description
            tags: List of tags
            category_id: YouTube category ID (22 = People & Blogs)
            privacy_status: private, public, unlisted
            subtitle_path: Path to subtitle file (.srt)
            playlist_ids: List of playlist IDs to add the video to
        """
        if not self.youtube_service:
            logger.error("Not authenticated. Call authenticate() first.")
            return None
        
        if not os.path.exists(video_path):
            logger.error(f"Video file not found: {video_path}")
            return None
        
        # Set default title if not provided
        if not title:
            title = Path(video_path).stem
        
        # Set default description
        if not description:
            description = f"Auto-generated video uploaded on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        
        # Set default tags
        if not tags:
            tags = ["auto-generated", "daily-video"]
        
        body = {
            'snippet': {
                'title': title,
                'description': description,
                'tags': tags,
                'categoryId': category_id
            },
            'status': {
                'privacyStatus': privacy_status
            }
        }
        
        # Create media upload object
        media = MediaFileUpload(
            video_path,
            chunksize=-1,
            resumable=True,
            mimetype='video/mp4'
        )
        
        try:
            logger.info(f"Starting upload for: {video_path}")
            insert_request = self.youtube_service.videos().insert(
                part=','.join(body.keys()),
                body=body,
                media_body=media
            )
            
            video_id = self._resumable_upload(insert_request)
            
            if video_id:
                logger.info(f"Successfully uploaded video: {title}")
                logger.info(f"Video ID: {video_id}")
                logger.info(f"Video URL: https://www.youtube.com/watch?v={video_id}")
                
                # Upload subtitles if available
                if subtitle_path and os.path.exists(subtitle_path):
                    self.upload_subtitles(video_id, subtitle_path)
                
                # Add to playlists if specified
                if playlist_ids:
                    added_playlists = self.add_video_to_playlists(video_id, playlist_ids)
                    if added_playlists:
                        logger.info(f"Added video to {len(added_playlists)} playlist(s)")
                        for playlist_info in added_playlists:
                            logger.info(f"  - Playlist ID: {playlist_info['playlist_id']}")
                
                return video_id
            
        except HttpError as e:
            logger.error(f"HTTP error occurred: {e}")
        except Exception as e:
            logger.error(f"Unexpected error occurred: {e}")
        
        return None
    
    def upload_subtitles(self, video_id, subtitle_path, language='ja'):
        """Upload subtitles to a YouTube video"""
        try:
            logger.info(f"Uploading subtitles: {subtitle_path}")
            
            subtitle_body = {
                'snippet': {
                    'videoId': video_id,
                    'language': language,
                    'name': f'Subtitles ({language})',
                    'isDraft': False
                }
            }
            
            media = MediaFileUpload(
                subtitle_path,
                mimetype='text/plain'
            )
            
            request = self.youtube_service.captions().insert(
                part='snippet',
                body=subtitle_body,
                media_body=media
            )
            
            response = request.execute()
            logger.info(f"Successfully uploaded subtitles. Caption ID: {response['id']}")
            
        except HttpError as e:
            logger.error(f"Failed to upload subtitles: {e}")
        except Exception as e:
            logger.error(f"Unexpected error uploading subtitles: {e}")
    
    def add_video_to_playlist(self, video_id, playlist_id):
        """Add a video to a specific playlist"""
        try:
            logger.info(f"Adding video {video_id} to playlist {playlist_id}")
            
            playlist_item_body = {
                'snippet': {
                    'playlistId': playlist_id,
                    'resourceId': {
                        'kind': 'youtube#video',
                        'videoId': video_id
                    }
                }
            }
            
            request = self.youtube_service.playlistItems().insert(
                part='snippet',
                body=playlist_item_body
            )
            
            response = request.execute()
            logger.info(f"Successfully added video to playlist. Playlist item ID: {response['id']}")
            return response['id']
            
        except HttpError as e:
            if e.resp.status == 409:
                logger.warning(f"Video {video_id} is already in playlist {playlist_id}")
            else:
                logger.error(f"Failed to add video to playlist: {e}")
        except Exception as e:
            logger.error(f"Unexpected error adding video to playlist: {e}")
        
        return None
    
    def add_video_to_playlists(self, video_id, playlist_ids):
        """Add a video to multiple playlists"""
        if not playlist_ids:
            logger.info("No playlists specified")
            return []
        
        added_playlists = []
        for playlist_id in playlist_ids:
            playlist_item_id = self.add_video_to_playlist(video_id, playlist_id)
            if playlist_item_id:
                added_playlists.append({
                    'playlist_id': playlist_id,
                    'playlist_item_id': playlist_item_id
                })
        
        return added_playlists
    
    def get_playlist_info(self, playlist_id):
        """Get information about a playlist"""
        try:
            request = self.youtube_service.playlists().list(
                part='snippet,contentDetails',
                id=playlist_id
            )
            
            response = request.execute()
            if response['items']:
                playlist = response['items'][0]
                return {
                    'id': playlist['id'],
                    'title': playlist['snippet']['title'],
                    'description': playlist['snippet']['description'],
                    'video_count': playlist['contentDetails']['itemCount']
                }
        except HttpError as e:
            logger.error(f"Failed to get playlist info: {e}")
        except Exception as e:
            logger.error(f"Unexpected error getting playlist info: {e}")
        
        return None
    
    def _resumable_upload(self, insert_request):
        """Execute resumable upload"""
        response = None
        error = None
        retry = 0
        
        while response is None:
            try:
                status, response = insert_request.next_chunk()
                if response is not None:
                    if 'id' in response:
                        return response['id']
                    else:
                        logger.error(f"Upload failed with unexpected response: {response}")
                        return None
            except HttpError as e:
                if e.resp.status in [500, 502, 503, 504]:
                    error = f"A retriable HTTP error {e.resp.status} occurred:\n{e.content}"
                else:
                    raise
            except Exception as e:
                error = f"A retriable error occurred: {e}"
            
            if error is not None:
                logger.warning(error)
                retry += 1
                if retry > 3:
                    logger.error("Maximum retry attempts exceeded")
                    return None
                
                import time
                time.sleep(2 ** retry)
        
        return None

def load_config(config_file='upload_video/upload_config.json'):
    """Load upload configuration"""
    if os.path.exists(config_file):
        with open(config_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_upload_log(video_path, video_id, config_file='upload_video/uploaded_videos.json'):
    """Save upload log to track uploaded videos"""
    log_data = {}
    if os.path.exists(config_file):
        with open(config_file, 'r', encoding='utf-8') as f:
            log_data = json.load(f)
    
    log_data[os.path.basename(video_path)] = {
        'video_id': video_id,
        'upload_date': datetime.now().isoformat(),
        'video_path': video_path,
        'video_url': f'https://www.youtube.com/watch?v={video_id}'
    }
    
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(log_data, f, indent=2, ensure_ascii=False)

def main():
    parser = argparse.ArgumentParser(description='Upload videos to YouTube')
    parser.add_argument('--video', help='Specific video file to upload')
    parser.add_argument('--all', action='store_true', help='Upload all videos in .dist directory')
    parser.add_argument('--privacy', default='private', choices=['private', 'public', 'unlisted'],
                       help='Privacy status for uploaded videos')
    parser.add_argument('--category', default='22', help='YouTube category ID')
    parser.add_argument('--dist-dir', default='.dist', help='Directory containing videos to upload')
    
    args = parser.parse_args()
    
    # Load configuration
    config = load_config()
    
    # Initialize uploader
    uploader = YouTubeUploader()
    
    # Authenticate
    if not uploader.authenticate():
        logger.error("Authentication failed")
        return 1
    
    # Load uploaded videos log to avoid duplicates
    uploaded_log_file = 'upload_video/uploaded_videos.json'
    uploaded_videos = {}
    if os.path.exists(uploaded_log_file):
        with open(uploaded_log_file, 'r', encoding='utf-8') as f:
            uploaded_videos = json.load(f)
    
    uploaded_count = 0
    
    if args.video:
        # Upload specific video
        video_path = args.video
        if not os.path.exists(video_path):
            logger.error(f"Video file not found: {video_path}")
            return 1
        
        # Check if already uploaded
        video_name = os.path.basename(video_path)
        if video_name in uploaded_videos:
            logger.info(f"Video already uploaded: {video_name}")
            logger.info(f"Video URL: {uploaded_videos[video_name]['video_url']}")
            return 0
        
        # Find corresponding subtitle file
        subtitle_path = video_path.replace('.mp4', '.srt')
        if not os.path.exists(subtitle_path):
            subtitle_path = None
        
        # Get title from config or use filename
        title = config.get('title_template', '{filename}').format(
            filename=Path(video_path).stem,
            date=datetime.now().strftime('%Y-%m-%d')
        )
        
        video_id = uploader.upload_video(
            video_path=video_path,
            title=title,
            description=config.get('description', ''),
            tags=config.get('tags', []),
            privacy_status=args.privacy,
            category_id=args.category,
            subtitle_path=subtitle_path,
            playlist_ids=config.get('playlists', [])
        )
        
        if video_id:
            save_upload_log(video_path, video_id)
            uploaded_count = 1
    
    elif args.all:
        # Upload all videos in .dist directory
        video_dir = Path(args.dist_dir)
        if not video_dir.exists():
            logger.error(f"Directory not found: {video_dir}")
            return 1
        
        video_files = list(video_dir.glob('*.mp4'))
        logger.info(f"Found {len(video_files)} video files")
        
        for video_path in sorted(video_files):
            video_name = video_path.name
            
            # Check if already uploaded
            if video_name in uploaded_videos:
                logger.info(f"Skipping already uploaded video: {video_name}")
                continue
            
            # Find corresponding subtitle file
            subtitle_path = video_path.with_suffix('.srt')
            if not subtitle_path.exists():
                subtitle_path = None
            
            # Get title from config or use filename
            title = config.get('title_template', '{filename}').format(
                filename=video_path.stem,
                date=datetime.now().strftime('%Y-%m-%d')
            )
            
            video_id = uploader.upload_video(
                video_path=str(video_path),
                title=title,
                description=config.get('description', ''),
                tags=config.get('tags', []),
                privacy_status=args.privacy,
                category_id=args.category,
                subtitle_path=str(subtitle_path) if subtitle_path else None,
                playlist_ids=config.get('playlists', [])
            )
            
            if video_id:
                save_upload_log(str(video_path), video_id)
                uploaded_count += 1
            
            # Add delay between uploads to avoid rate limiting
            if uploaded_count > 0 and uploaded_count % 5 == 0:
                logger.info("Waiting 60 seconds to avoid rate limiting...")
                import time
                time.sleep(60)
    
    else:
        logger.error("Please specify --video or --all")
        return 1
    
    logger.info(f"Upload completed. {uploaded_count} videos uploaded successfully.")
    return 0

if __name__ == '__main__':
    sys.exit(main())
