# YouTube Video Uploader

このディレクトリには、`.dist`ディレクトリ内の動画ファイルをYouTubeに自動アップロードするためのスクリプトが含まれています。

## 機能

- 🎥 MP4動画ファイルの自動アップロード
- 📝 SRTファイルからの字幕自動アップロード
- 📋 指定したプレイリストへの自動追加
- 🔐 OAuth2.0による安全な認証
- 📊 アップロード履歴の管理
- ⚙️ カスタマイズ可能な設定
- 🔄 レジューム機能付きアップロード
- 📋 詳細なログ記録
- 🛠️ プレイリスト管理ユーティリティ
- 🛠️ プレイリスト管理ユーティリティ

## セットアップ

### 1. 必要な依存関係をインストール

```bash
python3 upload_video/setup.py
```

### 2. Google Cloud Consoleでの設定

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. 新しいプロジェクトを作成するか、既存のプロジェクトを選択
3. YouTube Data API v3を有効化
4. OAuth 2.0認証情報を作成（デスクトップアプリケーション）
5. 認証情報のJSONファイルをダウンロード
6. ファイル名を`credentials.json`に変更し、`upload_video/`ディレクトリに配置

### 3. 設定ファイルの編集

`upload_video/upload_config.json`を編集して、動画のタイトル、説明、タグなどをカスタマイズできます。

```json
{
  "title_template": "Daily Video - {filename}",
  "description": "自動生成された動画です。\n\n生成日: {date}",
  "tags": ["daily video", "auto generated", "voice synthesis"],
  "default_privacy": "private",
  "playlists": [
    "PLe8rBiAN890Y9055UfPQhNWFD_A8dr9Ro",
    "PLe8rBiAN890boqEdONetsgS6v0vVDtLSB"
  ]
}
```

### プレイリスト設定

設定ファイルで指定したプレイリストに、アップロードした動画が自動的に追加されます。

- **playlists**: プレイリストIDの配列
- **upload_settings.auto_add_to_playlists**: プレイリスト自動追加の有効/無効（デフォルト: true）

## 使用方法

### コマンドライン（推奨）

```bash
# 全ての動画をアップロード（プライベート）
./upload_video/upload.sh --all

# 全ての動画をパブリックでアップロード
./upload_video/upload.sh --all --privacy public

# 特定の動画をアップロード
./upload_video/upload.sh --video .dist/2025-04-04.mp4

# ヘルプを表示
./upload_video/upload.sh --help
```

### Pythonスクリプト直接実行

```bash
# 全ての動画をアップロード
python3 upload_video/youtube_uploader.py --all

# 特定の動画をアップロード
python3 upload_video/youtube_uploader.py --video .dist/2025-04-04.mp4

# プライバシー設定を指定
python3 upload_video/youtube_uploader.py --all --privacy public
```

### プレイリスト管理

プレイリスト管理ユーティリティを使用して、プレイリストの確認や管理ができます：

```bash
# プレイリスト一覧を表示
python3 upload_video/playlist_manager.py --list

# 特定のプレイリストの動画を表示
python3 upload_video/playlist_manager.py --playlist PLe8rBiAN890Y9055UfPQhNWFD_A8dr9Ro

# 設定をテスト
python3 upload_video/playlist_manager.py --test-config

# 既存の動画をプレイリストに追加
python3 upload_video/playlist_manager.py --add-video h5cq5CbIpTo
```

## ファイル構成

```
upload_video/
├── youtube_uploader.py      # メインのアップロードスクリプト
├── daily_upload.py         # 日次アップロードスクリプト
├── playlist_manager.py     # プレイリスト管理ユーティリティ
├── upload.sh               # 便利なシェルスクリプト
├── setup.py               # セットアップスクリプト
├── requirements.txt       # Python依存関係
├── upload_config.json     # アップロード設定
├── credentials.json       # Google OAuth認証情報（要設定）
├── token.pickle          # 認証トークン（自動生成）
├── uploaded_videos.json  # アップロード履歴（自動生成）
├── upload.log            # アップロードログ（自動生成）
└── README.md             # このファイル
```

## 設定オプション

### プライバシー設定

- `private` - プライベート（デフォルト）
- `public` - パブリック
- `unlisted` - 限定公開

### カテゴリID

- `22` - People & Blogs（デフォルト）
- `24` - Entertainment
- `28` - Science & Technology

## 自動化

### cronジョブでの定期実行

```bash
# 毎日午前9時に新しい動画をアップロード
0 9 * * * /path/to/project/upload_video/upload.sh --all --privacy private
```

### systemdタイマーでの実行

```ini
# /etc/systemd/system/youtube-upload.service
[Unit]
Description=YouTube Video Upload
After=network.target

[Service]
Type=oneshot
User=your-username
WorkingDirectory=/path/to/project
ExecStart=/path/to/project/upload_video/upload.sh --all --privacy private

# /etc/systemd/system/youtube-upload.timer
[Unit]
Description=Daily YouTube Upload
Requires=youtube-upload.service

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

## トラブルシューティング

### よくある問題

1. **認証エラー**
   - `credentials.json`が正しく配置されているか確認
   - Google Cloud Consoleでプロジェクトが正しく設定されているか確認

2. **アップロード失敗**
   - インターネット接続を確認
   - YouTube Data API v3のクォータ制限を確認
   - ログファイル（`upload.log`）でエラー詳細を確認

3. **重複アップロード**
   - スクリプトは自動的に重複を検出してスキップします
   - `uploaded_videos.json`でアップロード履歴を確認

### ログの確認

```bash
# アップロードログを確認
tail -f upload_video/upload.log

# アップロード履歴を確認
cat upload_video/uploaded_videos.json | python3 -m json.tool
```

## API制限

YouTube Data API v3には以下の制限があります：

- 1日あたりのクォータ制限: 10,000ユニット
- 動画アップロード: 1,600ユニット/動画
- 字幕アップロード: 450ユニット/字幕

## セキュリティ

- 認証情報ファイル（`credentials.json`）は機密情報です
- `.gitignore`に追加して、バージョン管理に含めないでください
- 本番環境では適切なアクセス制御を設定してください

## サポート

問題が発生した場合は、以下を確認してください：

1. ログファイル（`upload_video/upload.log`）
2. Google Cloud Consoleでの設定
3. YouTube Data API v3の有効化状況
4. 認証情報の有効性

## ライセンス

このプロジェクトのライセンスに従います。
