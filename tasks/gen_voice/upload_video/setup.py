#!/usr/bin/env python3
"""
Setup script for YouTube uploader
"""

import os
import sys
import json
import subprocess

def install_requirements():
    """Install required packages"""
    print("Installing required packages...")
    try:
        subprocess.check_call([
            sys.executable, "-m", "pip", "install", "-r", "upload_video/requirements.txt"
        ])
        print("✅ Successfully installed required packages")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install packages: {e}")
        return False

def create_credentials_template():
    """Create a template for credentials"""
    credentials_template = {
        "installed": {
            "client_id": "YOUR_CLIENT_ID.apps.googleusercontent.com",
            "project_id": "your-project-id",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_secret": "YOUR_CLIENT_SECRET",
            "redirect_uris": ["http://localhost"]
        }
    }
    
    credentials_file = "upload_video/credentials.json.template"
    with open(credentials_file, 'w', encoding='utf-8') as f:
        json.dump(credentials_template, f, indent=2)
    
    print(f"✅ Created credentials template: {credentials_file}")
    return True

def setup_directory_structure():
    """Ensure proper directory structure"""
    dirs_to_create = [
        "upload_video/logs",
        "upload_video/backup"
    ]
    
    for dir_path in dirs_to_create:
        os.makedirs(dir_path, exist_ok=True)
        print(f"✅ Created directory: {dir_path}")
    
    return True

def create_env_template():
    """Create environment file template"""
    env_content = """# YouTube API Configuration
YOUTUBE_CLIENT_ID=your_client_id_here
YOUTUBE_CLIENT_SECRET=your_client_secret_here
YOUTUBE_PROJECT_ID=your_project_id_here

# Upload Settings
DEFAULT_PRIVACY=private
DEFAULT_CATEGORY=22
MAX_DAILY_UPLOADS=100
"""
    
    with open("upload_video/.env.template", 'w') as f:
        f.write(env_content)
    
    print("✅ Created environment template: upload_video/.env.template")
    return True

def main():
    print("🚀 Setting up YouTube uploader...")
    print("=" * 50)
    
    # Install requirements
    if not install_requirements():
        print("❌ Setup failed during package installation")
        return 1
    
    # Setup directory structure
    if not setup_directory_structure():
        print("❌ Setup failed during directory creation")
        return 1
    
    # Create credentials template
    if not create_credentials_template():
        print("❌ Setup failed during credentials template creation")
        return 1
    
    # Create environment template
    if not create_env_template():
        print("❌ Setup failed during environment template creation")
        return 1
    
    print("\n🎉 Setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Go to Google Cloud Console (https://console.cloud.google.com/)")
    print("2. Create a new project or select an existing one")
    print("3. Enable the YouTube Data API v3")
    print("4. Create OAuth 2.0 credentials (Desktop application)")
    print("5. Download the credentials JSON file")
    print("6. Rename it to 'credentials.json' and place it in the upload_video/ directory")
    print("7. Run the uploader script to start uploading videos")
    print("\n📖 Usage examples:")
    print("  # Upload a specific video:")
    print("  python upload_video/youtube_uploader.py --video .dist/2025-04-04.mp4")
    print("\n  # Upload all videos in .dist directory:")
    print("  python upload_video/youtube_uploader.py --all")
    print("\n  # Upload with public privacy:")
    print("  python upload_video/youtube_uploader.py --all --privacy public")
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
