# 英語学習問題ジェネレーター

## 必要ソフトウェア

* (ollama)[https://ollama.com/]
* (jq)[https://jqlang.github.io/jq/]

## モデルのダウンロード

```sh
ollama pull llava
ollama pull llama3
```

## 実行

ollama server を起動する

```sh
ollama start
```

```sh
./scripts/gen_novel.sh
```

## 出力確認

```sh
ls ./outputs/
cat ./outputs/_2024-04-25.md
```
