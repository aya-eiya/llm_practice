#!/bin/bash

LANG=ja_JP.UTF-8

fulldate=${1}

org_json="$(dirname "$0")/../outputs/${fulldate}.json"
out_json="$(dirname "$0")/../outputs/${fulldate}-ja.json"

translate() {
  local in; read in;
  ollama run llama3:8B-japanese-instruct "\`\`\`json\n{\"${1}\":\"${in}\"\n}\n\`\`\`\nvalue部分を翻訳してください,出力は\"${1}\"をキーとするJSONを出力してください" \
    | tr -d '\n' \
    | sed -e 's/```json/```/g' \
    | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
    | jq '.'
}

translate_dialog() {
  local in; read in;
  ollama run llama3:8B-japanese-instruct "以下は、会話を記録したJSONです,こどもの会話として翻訳してください\n\`\`\`json\n${in}\n\`\`\`\n\"dialog\",\"Billy\",\"Kerry\",\"Meg\",\"Lui\"は翻訳せず,発言の内容であるvalue部分を翻訳してください,出力はJSONのみを出力してください"
}

jq -r '.event' "$org_json" | translate "event" > /tmp/.translate_ja_event.json
jq -r '.title' "$org_json" | translate "title" > /tmp/.translate_ja_title.json
jq -r '.body' "$org_json" | translate "body" > /tmp/.translate_ja_body.json

# jq '{"dialog":.dialog}' "$org_json" \
#   | translate_dialog \
#   > /tmp/.translate_ja_dialog.json
jq '{"dialog":.dialog}' "$org_json" \
  > /tmp/.translate_ja_dialog.json

# jq '{"quiz":.quiz}' "$org_json" \
#   #| translate_quiz \
#   > /tmp/.translate_ja_quiz.json
jq '{"quiz":.quiz}' "$org_json" \
  > /tmp/.translate_ja_quiz.json

jq -s '.[0] * .[1] * .[2] * .[3] * .[4] * { "date": .[5].date, "charactor count": (.[2].body|length) }' \
  /tmp/.translate_ja_event.json \
  /tmp/.translate_ja_title.json \
  /tmp/.translate_ja_body.json \
  /tmp/.translate_ja_dialog.json \
  /tmp/.translate_ja_quiz.json \
  "${org_json}" > "${out_json}"
