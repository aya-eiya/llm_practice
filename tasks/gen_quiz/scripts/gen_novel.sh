#!/bin/bash

LANG=en_US.UTF-8

# fulldate=$(date +"%Y-%m-%d")
# date=$(date +"%b-%dth")

fulldate=${1}
date=${2}

theme=${3}
flavor=${4}

billy="Billy, an 11-year-old boy of intelligence and curiosity. His passion for science, math, and history is palpable, sparking animated discussions and insightful questions. Despite his age, Billy effortlessly navigates complex concepts and loves tinkering in his bedroom laboratory."
kerry="Kerry, a lively 12-year-old filled with curiosity and mischief. With his tousled brown hair and playful grin, he's always up to something, whether it's building LEGO masterpieces or lobbying for a pet tarantula. Despite his fun-loving nature, Kerry is sharp and perceptive, quick to spot unfairness and hypocrisy. He's a passionate debater, often discussing superheroes or critiquing movies with friends."
meg="Meg, a 12-year-old with an insatiable love for books and boundless imagination. Always immersed in a novel or lost in her writing, she's a true bookworm with a penchant for the extraordinary. Meg's creativity knows no limits as she dreams up fantastical worlds and characters. While some may find her 'quirky,' she embraces her uniqueness, seeing magic in everyday moments."
lui="Lui, a veteran educator with over 20 years of experience teaching social studies and history. At 42, known for his strictness and attention to detail, Lui instills values of honesty and hard work in his students. Despite his tough exterior, he's a trusted mentor and friend, inspiring a love of learning beyond the classroom."

try_gen_novel() {
  local novel="create JSON as single line. Research an event in ${theme} history that happened on the same month and day as ${date} and create a short ${flavor} novel for children that is after the day and be written with adout 180 words and that output is a JSON formatted as { \"event\": string, \"title\": string, \"body\": string } ,newline in the string should be escaped by \\n. and output only JSON part."
  echo "${novel}" > /tmp/.gen_novel.prompt
  ollama run llava "$novel" \
  | tee /tmp/.gen_novel.raw.txt \
  | tr -d '\n' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq -s "{\"date\": \"${fulldate}\"} * .[0]"

  if [ $? -eq 0 ]; then
    return 0
  fi

  cat /tmp/.gen_novel.raw.txt \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq -s "{\"date\": \"${fulldate}\"} * .[0]"
}

gen_novel() {
  local cnt=0
  while true; do
    try_gen_novel 2> /dev/null
    if [ $? -eq 0 ]; then
      break
    fi
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ];
      then return 1;
    fi
  done
}

try_gen_conversation() {
  local conversation="Novel:\`\`\`${1}\`\`\`\n\nCharacters:\"${billy}\n${kerry}\n${meg}\n${lui}\"\n\n\ncreate conversation of Billy, Kerry, Meg, Lui about the novel, and the order of the statements of the three conversations should be swapped so that they are random.. the output must be formatted as JSON like \`\`\`{ \"dialog\": [ { \"Billy\": string }, { \"Kerry\": string }, ... ] }\`\`\`, \"dialog\" is the array of conversation objects that is formatted as the speaker name is the key of object and the speaker's line is its value."
  echo "${conversation}" > /tmp/.gen_conversation.prompt
  ollama run llama3 "$conversation" \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq
}

gen_conversation() {
  local cnt=0
  local input=('')
  local in; while read -r in; do input+=("${in}" '\n') ;done
  while true; do
    try_gen_conversation "${input[*]}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

try_gen_quiz() {
  local quiz="${1}\n\nFrom the above novel text and dialogue, create five questions to test the English reading comprehension skills used in ESL classes. The format for answering the questions should be a one-choice format with five options to choose from, the output must be formatted as JSON like \`\`\`{ \"quiz\": [ { \"question\": string, "options": [ string, string, ... ], "answer": number  } ] }\`\`\`, \"quiz\" is root of the object and it is the array of question objects that format is \"question\" as string and \"options\" as string array and \"answer\" as index of correct choice in options."
  echo "${quiz}" > /tmp/.gen_quiz.prompt
  ollama run llama3 "${quiz}" \
  | tee /tmp/.gen_novel_quiz.raw.txt \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq '{ "quiz": .quiz }'
}

gen_quiz() {
  local cnt=0
  local input=('')
  local in; while read -r in; do input+=("${in}" '\n') ;done
  while true; do
    try_gen_quiz "${input[*]}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

save_prompt() {
  local n=$(cat /tmp/.gen_novel.prompt | sed -e 's/```/\\`\\`\\`/g')
  local c=$(cat /tmp/.gen_conversation.prompt | sed -e 's/```/\\`\\`\\`/g')
  local q=$(cat /tmp/.gen_quiz.prompt | sed -e 's/```/\\`\\`\\`/g')
  # to markdown
  cat <<MARKDOWN
# Prompt
generate for ${fulldate}

## Generate Novel

\`\`\`raw
${n}
\`\`\`
## Generate Conversation

\`\`\`raw
${c}
\`\`\`
## Generate Quiz

\`\`\`raw
${q}
\`\`\`
MARKDOWN
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
  | gen_quiz >  /tmp/.gen_novel_quiz.json

if [ $? -ne 0 ]; then
  echo "Failed to generate quiz."
  exit 1
fi

words=$(jq -r '.body' /tmp/.gen_novel.json | wc -w | tr -d ' ')
jq -s ".[0] * { \"word count\": ${words} } * .[1] * .[2]" /tmp/.gen_novel.json /tmp/.gen_novel_conversation.json /tmp/.gen_novel_quiz.json > $(dirname "$0")/../outputs/${fulldate}.json

jq -r "
  \"# Daily English Quiz ${fulldate} (AI generated)\n\n\" \
  + \"## \" \
  + .title \
  + \"\n\n\" \
  + .body \
  + \"\n\n\" \
  + \"## Dialog\n\n\" \
  + (.dialog | map(keys[0] + \": \" + .[keys[0]]) | join(\"<br />\n\")) \
  + \"\n\n\" \
  + \"## quiz\n\n\" \
  + (.quiz | to_entries | map(\
    \"### Question.\" \
    + (.key + 1|tostring) \
    + \"\n\n\" \
    + .value.question \
    + \"\n\n\" \
    + (.value.options | to_entries | map (\
        \"- \" + ([.key + 65] | implode) + \") \" + .value \
      ) | join(\"\n\")) \
    + \"\n\n\" \
    + \"<details>\n\" \
    + \"  <summary>Answer</summary>\n\" \
    + ([.value.answer + 65] | implode) + \") \" + .value.options[.value.answer] + \"\n\" \
    + \"</details>\n\" \
  ) | join(\"\n\n\"))" $(dirname "$0")/../outputs/${fulldate}.json > $(dirname "$0")/../outputs/${fulldate}.md

save_prompt > $(dirname "$0")/../outputs/${fulldate}.prompt.md
