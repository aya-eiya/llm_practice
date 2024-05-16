## 音声読み上げ機能

TTSのサンプルで動作確認

```bash
conda create -n gen_voice python=3.10.14
conda activate gen_voice
pip install tts
brew install espeak-ng # if macos
python tts_sample.python
```

## Open Voice を使用したクローン音声モデル生成

適当なクローン元音源を以下の名前で格納する

例えば [moe-speech](https://huggingface.co/datasets/litagin/moe-speech) などから取得する

```
./voice_sample/resources/system.wav # sample based moe-speech 1707f3b6
./voice_sample/resources/narrator.wav # sample based moe-speech 0c109d26
./voice_sample/resources/billy.wav # sample based moe-speech 5c25991f
./voice_sample/resources/kerry.wav # sample based moe-speech 0deadde0
./voice_sample/resources/lui.wav # sample based moe-speech 1105cfcb
./voice_sample/resources/meg.wav # sample based moe-speech 00163dc9
```

実行準備

```bash
# conda create -n gen_voice python=3.10.14 # 環境未作成の場合
conda activate gen_voice
pip install git+https://github.com/myshell-ai/MeloTTS.git
python -m unidic download
git submodule update
wget https://myshell-public-repo-hosting.s3.amazonaws.com/openvoice/checkpoints_v2_0417.zip -O - | bsdtar -xvf- -C ./gen_voice_model
pip install -e ./gen_voice_model
```

生成の実行

```bash
# 生成
python ov_sample.py
# 会話を結合
python join_sample.py
```

生成されたファイルは outputs/dialog.wav として保存されているはず

```bash
# mp3に変換する場合
ffmpeg -i "outputs/dialog.wav" -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 "example.mp3"

# mp4に変換する場合
ffmpeg -loop 1 -i "sample_mp4_back.png" -i "outputs/dialog.wav" -vcodec libx264 -acodec aac -ab 160k -ac 2 -ar 48000 -pix_fmt yuv420p -shortest output.mp4
```

https://github.com/aya-eiya/llm_practice/raw/main/tasks/gen_voice/example.mp4
