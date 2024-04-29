# 英語学習問題ジェネレーター

## 必要ソフトウェア

* [ollama](https://ollama.com/)
* [jq](https://jqlang.github.io/jq/)
* [huggingface hub cli](https://huggingface.co/docs/huggingface_hub/en/guides/cli)

## モデルのダウンロード

```sh
ollama pull llava
ollama pull llama3
mkdir -r ~/.huggingface-hub/models

# 以下は日本語翻訳を作成する場合に必要
huggingface-cli download lightblue/suzume-llama-3-8B-japanese-gguf ggml-model-Q4_K_M.gguf --local-dir ~/.huggingface-hub/models
ollama create llama3:8B-japanese-instruct -f 8B-japanese-instruct.model
```

## 実行準備

ollama server を起動する

```sh
ollama start
```

## 小説と問題の出力

```sh
# args {1:generate date} {2:event date} {3:event theme} {4:novel category}
./scripts/gen_novel.sh "2024-04-25" "April 25th" "science" "SF"
```

### 出力確認

```sh
ls ./outputs/
cat ./outputs/2024-04-25.md
```

## 日本語に翻訳した問題の出力

※ モデルの日本語がまだまだ拙いので調整中

```sh
# ./outputs/2024-04-05.json は生成済み
# args {1:generate date}
./scripts/translate_ja.sh "2024-04-25"
```

### 出力確認

```sh
ls ./outputs/
cat ./outputs/2024-04-25-ja.md
```
