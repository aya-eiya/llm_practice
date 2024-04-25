#!/bin/bash

LANG=en_US.UTF-8

fulldate=$(date +"%Y-%m-%d")
date=$(date +"%b-%dth")

try_gen() {
  local novel="create JSON as single line. Research an event in sience history that happened on the same month and day as ${date} and create a short SF novel for children that is after the day and be written with adout 180 words and that output is a JSON formatted as { \"event\": string, \"title\": string, \"body\": string} ,newline in the string should be escaped by \\n. and output only JSON part."
  ollama run llava $novel \
  | tr -d '\n' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq -s "{\"date\": \"${fulldate}\"} * .[0]"
}

gen_novel() {
  cnt=0
  while true; do
    try_gen 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

explain() {
  local in; read in;
  local explain="explain the grammar of the novel.\"${in}\""
  ollama run llama3 $explain
}

conversation() {
  local in; read in;
  local conversation="Novel: \"${in}\"\n\ncreate conversation of three children Billy, Kerry and Meg about the novel. the output must be formatted as 'Person: \"line\"' and put those line by line."
  ollama run llama3 $conversation
}

quize() {
  local in; read in;
  local quize="${in}\n\nFrom the above novel text and dialogue, please create five questions to test the English reading comprehension skills used in ESL classes. The format for answering the questions should be a one-choice format with five options to choose from."
  ollama run llama3 $quize
}

gen_novel > /tmp/.gen_novel.json
if [ $? -ne 0 ]; then
  echo "Failed to generate novel."
  exit 1
fi
cat /tmp/.gen_novel.json | jq -r '.body' | conversation > /tmp/.gen_novel_conversation.txt

cat /tmp/.gen_novel.json \
  | jq -r '.title,"",.body,"\n===============\n"' \
  | cat - /tmp/.gen_novel_conversation.txt \
  | quize >  /tmp/.gen_novel_quize.txt

cat /tmp/.gen_novel.json \
  | jq -r '"# " + .title,"",.body,"\n===============\n"' \
  | cat - /tmp/.gen_novel_conversation.txt \
  | cat - /tmp/.gen_novel_quize.txt <<< $(echo "# Quize") \
    > $(dirname "$0")/../outputs/_${fulldate}.md
