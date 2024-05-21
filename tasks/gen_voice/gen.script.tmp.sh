#!/bin/bash

fulldate=${1}
inputfile="../gen_quiz/outputs/${fulldate}.json"

jq '[{"System": "Improve Your English Skills with Daily AI-Generated Novels and Learning Tests."}, {"System": .title }]' "${inputfile}" > /tmp/gen_voice_header.json
jq '(.body|gsub("(?<a>[.?!]+)(?<b>.)"; "\(.a)[!SENT!]\(.b)"))|split("[!SENT!]")|map({"Narrator":.|gsub("^ +| +$"; "")})' "${inputfile}" > /tmp/gen_voice_body.json
jq -n "[{\"System\": \"Now, let's move on to the conversation between Billy, Meg, Kelly, and their teacher, Lui, after reading the novel.\"}]" > /tmp/gen_voice_pre_dialog.json
jq '.dialog' "${inputfile}" > /tmp/gen_voice_dialog.json
jq -n "[{ \"System\": \"Now, let's test your understanding of the novel and the dialogue with 5 questions.\" }]" > /tmp/gen_voice_post_dialog.json
jq '.quiz | to_entries | map([
  { "System": ("Question " + (.key + 1|tostring) + ".") },
  ( .value | { "System": .question } ),
  ( .value.options | to_entries | map([
    { "System": ([.key+65]|implode|.+"."|sub("A";"EE")) },
    { "System": .value }
  ])),
  { "System": "The answer is." },
  { "System": ([.value.answer+65]|implode|.+"!"|sub("A";"EE")) },
  { "System": .value.options[.value.answer] }
]) | flatten' "${inputfile}" > /tmp/gen_voice_quiz.json

jq -s 'flatten' \
  /tmp/gen_voice_header.json\
  /tmp/gen_voice_body.json\
  /tmp/gen_voice_pre_dialog.json\
  /tmp/gen_voice_dialog.json\
  /tmp/gen_voice_post_dialog.json\
  /tmp/gen_voice_quiz.json > /tmp/gen_voice.json

cat /tmp/gen_voice.json
