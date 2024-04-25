#!/bin/bash

LANG=en_US.UTF-8

fulldate=$(date +"%Y-%m-%d")
# date="Apl-02"
date=$(date +"%b-%dth")

prompt="create JSON as single line. Research an event in mathematics history that happened on the same month and day as ${date} \
and create a short SF novel for children that is after the day and be written with adout 180 words \
and that output is a JSON formatted as { \"event\": string, \"title\": string, \"body\": string} \
,new line in the string should be escaped by \\n. and output only JSON part."


try_gen() {
  ollama run llava $prompt \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq -s "{\"date\": \"${fulldate}\"} * .[0]"
}


gen_novel() {
  cnt=0
  while true; do
    try_gen 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then break; fi
  done
}

explain() {
  local in; read in;
  local explain="explain the grammar of the novel.\"${in}\""
  ollama run llama3 $explain
}

gen_novel > /tmp/.gen_novel.json
cat /tmp.gen_novel.json
cat /tmp.gen_novel.json | jq -r '.body' | explain
