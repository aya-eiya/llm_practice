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
./gen_voice_model/resources/billy.wav # sample based moe-speech 5c25991f
./gen_voice_model/resources/kerry.wav # sample based moe-speech 0deadde0
./gen_voice_model/resources/lui.wav # sample based moe-speech 1105cfcb
./gen_voice_model/resources/meg.wav # sample based moe-speech 00163dc9
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

[example.wav](https://github.com/aya-eiya/llm_practice/raw/main/tasks/gen_voice/example.wav)

<audio controls>
  <source src="https://github.com/aya-eiya/llm_practice/raw/main/tasks/gen_voice/example.wav" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
