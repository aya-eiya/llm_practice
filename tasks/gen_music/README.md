# 音楽生成

## setup

facebook/musicgen を audiocraft 経由で動かす

M1 Mac には対応していないが、 LLVM を使えばインストールが可能

```sh
conda create -n gen_music python=3.10.14
conda activate gen_music
pip install torch
brew install ffmpeg
# xformers が M1 で動かないので llvm のコンパイラでビルドする
brew install llvm
MACOSX_DEPLOYMENT_TARGET=10.9 CC=/opt/homebrew/opt/llvm/bin/clang CXX=/opt/homebrew/opt/llvm/bin/clang++ pip install git+https://github.com/facebookresearch/audiocraft.git
# M1 MBA だと Small Model が限界かな
python gen.sample.py
```
