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

```
./gen_voice_model/resources/billy.wav
./gen_voice_model/resources/kerry.wav
./gen_voice_model/resources/lui.wav
./gen_voice_model/resources/meg.wav
```

```bash
conda activate gen_voice
pip install git+https://github.com/myshell-ai/MeloTTS.git
python -m unidic download
git submodule update
wget https://myshell-public-repo-hosting.s3.amazonaws.com/openvoice/checkpoints_v2_0417.zip -O - | bsdtar -xvf- -C ./gen_voice_model
pip install -e ./gen_voice_model
```

```bash

```
