#!/bin/bash

LANG=en_US.UTF-8

fulldate=$(date +"%Y-%m-%d")
date=$(date +"%b-%dth")

try_gen_novel() {
  local novel="create JSON as single line. Research an event in sience history that happened on the same month and day as ${date} and create a short SF novel for children that is after the day and be written with adout 180 words and that output is a JSON formatted as { \"event\": string, \"title\": string, \"body\": string} ,newline in the string should be escaped by \\n. and output only JSON part."
  ollama run llava $novel \
  | tr -d '\n' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq -s "{\"date\": \"${fulldate}\"} * .[0]"
}

gen_novel() {
  local cnt=0
  while true; do
    try_gen_novel 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

try_gen_conversation() {
  local conversation="Novel: \"${1}\"\n\ncreate conversation of three children Billy, Kerry and Meg about the novel. the output must be formatted as JSON like ```{ \"dialog\": [ { \"Billy\": string }, { \"Kerry\": string }, ... ] }```, \"dialog\" is the array of conversation objects that is formatted as the speaker name is the key of object and the speaker's line is its value."
  ollama run llama3 $conversation \
  | tr -d '\n' \
  | sed -n -e 's/^.*```\({.*}\)```.*$/\1/p' \
  | jq
}

gen_conversation() {
  local cnt=0
  local in; read in;
  while true; do
    try_gen_conversation ${in} 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

try_gen_quize() {
  local quize="${1}\n\nFrom the above novel text and dialogue, create five questions to test the English reading comprehension skills used in ESL classes. The format for answering the questions should be a one-choice format with five options to choose from, output it as JSON like '{ \"quize\": [ { \"question\": string, "options": [ string, string, ... ], "answer": number  } ] }'."
  ollama run llama3 $quize \
  | tr -d '\n' \
  | sed -n -e 's/^.*```\({.*}\)```.*$/\1/p' \
  | jq
}

gen_quize() {
  local cnt=0
  local in; read in;
  while true; do
    try_gen_quize ${in} 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

gen_novel > /tmp/.gen_novel.json

if [ $? -ne 0 ]; then
  echo "Failed to generate novel."
  exit 1
fi

cat /tmp/.gen_novel.json \
  | jq -r '.body' \
  | gen_conversation > /tmp/.gen_novel_conversation.json

if [ $? -ne 0 ]; then
  echo "Failed to generate conversation."
  exit 1
fi


jq -s -r '"# " + .[0].title + "\n\n" + .[0].body + "\n\n" + (.[1].dialog | map(keys[0] + ": " + .[keys[0]]) | "## Dialog\n\n" + join("\n"))' /tmp/.gen_novel.json /tmp/.gen_novel_conversation.json \
  | gen_quize >  /tmp/.gen_novel_quize.json

jq -s '.[0] * .[1] * .[2]' /tmp/.gen_novel.json /tmp/.gen_novel_conversation.json /tmp/.gen_novel_quize.json > $(dirname "$0")/../outputs/${fulldate}.json

jq -r "
  \"# Daily English Quize ${fulldate} (AI generated)\n\n\" \
  + \"## \" \
  + .title \
  + \"\n\n\" \
  + .body \
  + \"\n\n\" \
  + \"## Dialog\n\n\" \
  + (.dialog | map(keys[0] + \": \" + .[keys[0]]) | join(\"<br />\n\")) \
  + \"\n\n\" \
  + \"## Quize\n\n\" \
  + (.quiz | to_entries | map(\
    \"### Question.\" \
    + (.key + 1|tostring) \
    + \"\n\n\" \
    + .value.question \
    + \"\n\n\" \
    + (.value.options | to_entries | map (\
        \"- \" + ([.key + 65] | implode) + \": \" + .value \
      ) | join(\"\n\")) \
    + \"\n\n\" \
    + \"<details>\n\" \
    + \"  <summary>Answer</summary>\n\" \
    + ([.value.answer + 65] | implode) + \": \" + .value.options[.value.answer] + \"\n\" \
    + \"</details>\n\" \
  ) | join(\"\n\n\"))" $(dirname "$0")/../outputs/${fulldate}.json > $(dirname "$0")/../outputs/${fulldate}.md
