#!/bin/bash

# YouTube Upload Script
# Usage: ./upload_video/upload.sh [options]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default values
PRIVACY="private"
DIST_DIR=".dist"
UPLOAD_ALL=false
SPECIFIC_VIDEO=""

# Function to print colored output
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "YouTube Video Upload Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -a, --all              Upload all videos in .dist directory"
    echo "  -v, --video FILE       Upload specific video file"
    echo "  -p, --privacy STATUS   Set privacy status (private|public|unlisted) [default: private]"
    echo "  -d, --dist-dir DIR     Directory containing videos [default: .dist]"
    echo "  -h, --help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 --all                           # Upload all videos as private"
    echo "  $0 --all --privacy public          # Upload all videos as public"
    echo "  $0 --video .dist/2025-04-04.mp4    # Upload specific video"
    echo ""
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -a|--all)
            UPLOAD_ALL=true
            shift
            ;;
        -v|--video)
            SPECIFIC_VIDEO="$2"
            shift 2
            ;;
        -p|--privacy)
            PRIVACY="$2"
            shift 2
            ;;
        -d|--dist-dir)
            DIST_DIR="$2"
            shift 2
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Validate privacy status
case $PRIVACY in
    private|public|unlisted)
        ;;
    *)
        print_error "Invalid privacy status: $PRIVACY"
        print_error "Valid options: private, public, unlisted"
        exit 1
        ;;
esac

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    print_error "python3 is not installed or not in PATH"
    exit 1
fi

# Check if credentials file exists
CREDENTIALS_FILE="$SCRIPT_DIR/credentials.json"
if [[ ! -f "$CREDENTIALS_FILE" ]]; then
    print_error "Credentials file not found: $CREDENTIALS_FILE"
    print_error "Please run setup first: python3 upload_video/setup.py"
    print_error "Then follow the instructions to set up Google OAuth credentials"
    exit 1
fi

# Check if .dist directory exists
if [[ ! -d "$PROJECT_DIR/$DIST_DIR" ]]; then
    print_error "Directory not found: $PROJECT_DIR/$DIST_DIR"
    exit 1
fi

# Change to project directory
cd "$PROJECT_DIR"

print_info "Starting YouTube upload process..."
print_info "Privacy setting: $PRIVACY"
print_info "Video directory: $DIST_DIR"

# Build Python command
PYTHON_CMD="python3 upload_video/youtube_uploader.py"
PYTHON_CMD="$PYTHON_CMD --privacy $PRIVACY"
PYTHON_CMD="$PYTHON_CMD --dist-dir $DIST_DIR"

if [[ "$UPLOAD_ALL" == true ]]; then
    print_info "Uploading all videos in $DIST_DIR directory..."
    PYTHON_CMD="$PYTHON_CMD --all"
elif [[ -n "$SPECIFIC_VIDEO" ]]; then
    if [[ ! -f "$SPECIFIC_VIDEO" ]]; then
        print_error "Video file not found: $SPECIFIC_VIDEO"
        exit 1
    fi
    print_info "Uploading specific video: $SPECIFIC_VIDEO"
    PYTHON_CMD="$PYTHON_CMD --video $SPECIFIC_VIDEO"
else
    print_error "Please specify either --all or --video option"
    show_usage
    exit 1
fi

# Execute the upload
print_info "Executing: $PYTHON_CMD"
if eval "$PYTHON_CMD"; then
    print_info "Upload process completed successfully!"
else
    print_error "Upload process failed!"
    exit 1
fi

# Show upload log
UPLOAD_LOG="upload_video/uploaded_videos.json"
if [[ -f "$UPLOAD_LOG" ]]; then
    print_info "Upload log available at: $UPLOAD_LOG"
    
    # Show recently uploaded videos
    print_info "Recently uploaded videos:"
    python3 -c "
import json
import os
from datetime import datetime, timedelta

log_file = '$UPLOAD_LOG'
if os.path.exists(log_file):
    with open(log_file, 'r') as f:
        data = json.load(f)
    
    # Show uploads from last 24 hours
    recent_cutoff = datetime.now() - timedelta(hours=24)
    recent_uploads = []
    
    for filename, info in data.items():
        upload_date = datetime.fromisoformat(info['upload_date'].replace('Z', '+00:00').replace('+00:00', ''))
        if upload_date > recent_cutoff:
            recent_uploads.append((filename, info))
    
    if recent_uploads:
        print(f'Found {len(recent_uploads)} recent uploads:')
        for filename, info in recent_uploads[-5:]:  # Show last 5
            print(f'  - {filename}: {info[\"video_url\"]}')
    else:
        print('No recent uploads found')
"
fi
