## AI practice

生成AIの学習のついでに、収益化も可能なサービスを作成することを目的とするプロジェクト

簡単で軽量な生成AIのモデルを使って、ローカルマシンで生成した静的なコンテンツを使ってサービスを提供する

## frontend-web

公開用のサイト

https://daily-ai-generated-quiz.deno.dev/

主な使用技術: Deno + fresh FW, Typescript

Deno Deploy で公開する

## tasks

ローカルマシン、または GitHub Actions で動作させるタスク

### gen quiz

小説の文章と会話文、そして問題文を LLM で生成するシェルスクリプト

主な使用技術: ollama, llama3, llava

### gen voice

読み上げ音声を作成する Python スクリプト

主な使用技術: OpenVoice V2, Python, TTS

https://github.com/aya-eiya/llm_practice/assets/601721/4603e5a2-dc6c-40fb-9cd6-f461dd8e9b2a
