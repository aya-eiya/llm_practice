#!/bin/bash

# Env & Variables

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
OUTPUTS_DIR="${CURRENT_DIR}/../outputs"

## characters in the dialog
billy="Billy, an 11-year-old boy of intelligence and curiosity. His passion for science, math, and history is palpable, sparking animated discussions and insightful questions. Despite his age, Billy effortlessly navigates complex concepts and loves tinkering in his bedroom laboratory."
kerry="Kerry, a lively 12-year-old filled with curiosity and mischief. With his tousled brown hair and playful grin, he's always up to something, whether it's building LEGO masterpieces or lobbying for a pet tarantula. Despite his fun-loving nature, Kerry is sharp and perceptive, quick to spot unfairness and hypocrisy. He's a passionate debater, often discussing superheroes or critiquing movies with friends."
meg="Meg, a 12-year-old with an insatiable love for books and boundless imagination. Always immersed in a novel or lost in her writing, she's a true bookworm with a penchant for the extraordinary. Meg's creativity knows no limits as she dreams up fantastical worlds and characters. While some may find her 'quirky,' she embraces her uniqueness, seeing magic in everyday moments."
lui="Lui, a veteran educator with over 20 years of experience teaching social studies and history. At 42, known for his strictness and attention to detail, Lui instills values of honesty and hard work in his students. Despite his tough exterior, he's a trusted mentor and friend, inspiring a love of learning beyond the classroom."

## date
fulldate=$(date "+%Y-%m-%d")
# date='April 1st'
date_th=$(
  p=('1st' '2nd' '3rd');
  d=$(($(date "+%d")));
  if [ $d -gt 3 ];
    then echo -n "${d}th"
    else echo -n "$p[$d]"
  fi
)
date=$(date "+%B ${date_th}")

## Steps
steps=('event' 'novel' 'conversation' 'quiz' 'make')

## TMP files
init_tmp () {
  tmp_prompt_event=/tmp/.research_event_${fulldate}.prompt
  tmp_prompt_novel=/tmp/.gen_novel_${fulldate}.prompt
  tmp_prompt_conversation=/tmp/.gen_conversation_${fulldate}.prompt
  tmp_prompt_quiz=/tmp/.gen_quiz_${fulldate}.prompt
  
  tmp_out_event=/tmp/.gen_event_${fulldate}.raw.txt
  tmp_out_novel=/tmp/.gen_novel_${fulldate}.raw.txt
  tmp_out_conversation=/tmp/.gen_conversation_${fulldate}.raw.txt
  tmp_out_quiz=/tmp/.gen_quiz_${fulldate}.raw.txt
  
  tmp_json_params=/tmp/.gen_params_${fulldate}.json
  
  tmp_json_event=/tmp/.gen_event_${fulldate}.json
  tmp_json_novel=/tmp/.gen_novel_${fulldate}.json
  tmp_json_conversation=/tmp/.gen_conversation_${fulldate}.json
  tmp_json_quiz=/tmp/.gen_quiz_${fulldate}.json
  
  tmp_files=(
    $tmp_prompt_event $tmp_prompt_novel $tmp_prompt_conversationl $tmp_prompt_quiz
    $tmp_out_event $tmp_out_novel $tmp_out_conversation $tmp_out_quiz
    $tmp_json_params
    $tmp_json_event $tmp_json_novel $tmp_json_conversation $tmp_json_quiz
  )
}
## models
main_model="llama3"
novel_model="llava"

# Functions

## Event
try_gen_event() {
  local event="Research an event in ${theme} history that happened on the same month and date as ${date}. output is JSON of \"{ \n "event": string, // event title,\n "details": string // event detail \n}\""
  echo "${event}" > $tmp_prompt_event
  ollama run $main_model "${event}" \
  | tee $tmp_out_event \
  | tr -d '\n' \
  | tr -d '\`' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq '{"event": .event, "details": .details}'
}

gen_event() {
  local cnt=0
  while true; do
    try_gen_event 2> /dev/null
    if [ $? -eq 0 ]; then
      break
    fi
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then
      return 1
    fi
  done
}

## Novel
try_gen_novel() {
  local event="${1}"
  local novel="Event:\n\`\`\`\n${event}\n\`\`\`\nCreate single line JSON of short ${flavor} novel that is inspired by the concept of the event and be written with about 180 words. The output is a JSON formatted as { \"title\": string, \"body\": string }, newline charactor in strings of data should be escaped by '\\\\n'. and the output is JSON part only."
  echo "${novel}" > $tmp_prompt_novel
  ollama run $novel_model "$novel" \
  | tee $tmp_out_novel \
  | tr -d '\n' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq -s "{\"event\": ${event} ,\"date\": \"${fulldate}\"} * .[0]"
}

gen_novel() {
  local cnt=0
  local event=$(cat $tmp_json_event)
  while true; do
    try_gen_novel "${event}" 2> /dev/null
    if [ $? -eq 0 ]; then
      break
    fi
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ];
      then return 1;
    fi
  done
}

## Conversation
try_gen_conversation() {
  local conversation="Novel:\`\`\`${1}\`\`\`\n\nCharacters:\"${billy}\n${kerry}\n${meg}\n${lui}\"\n\n\ncreate conversation of Billy, Kerry, Meg, Lui about the novel, and the order of the statements of the three conversations should be swapped so that they are random. the output must be formatted as JSON like \`\`\`{ \"dialog\": [ { \"Billy\": string }, { \"Kerry\": string }, ... ] }\`\`\`, \"dialog\" is the array of conversation objects that is formatted as the speaker name is the key of object and the speaker's line is its value and the object must have only one key."
  echo "${conversation}" > $tmp_prompt_conversation
  ollama run $main_model "$conversation" \
  | tee $tmp_out_conversation \
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

## Quiz
try_gen_quiz() {
  local quiz="${1}\n\nFrom the above novel text and dialogue, create five questions to test the English reading comprehension skills used in ESL classes. The format for answering the questions should be a one-choice format with five options to choose from, the output must be formatted as JSON like \`\`\`{ \"quiz\": [ { \"question\": string, "options": [ string, string, ... ], "answer": number  } ] }\`\`\`, \"quiz\" is root of the object and it is the array of question objects that format is \"question\" as string and \"options\" as string array and \"answer\" as index of correct choice in options."
  echo "${quiz}" > $tmp_prompt_quiz
  ollama run $main_model "${quiz}" \
  | tee $tmp_out_quiz \
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

## Make Outpus
make_prompt_log_md() {
  local e=$(cat $tmp_prompt_event | sed -e 's/```/\\`\\`\\`/g')
  local n=$(cat $tmp_prompt_novel | sed -e 's/```/\\`\\`\\`/g')
  local c=$(cat $tmp_prompt_conversation | sed -e 's/```/\\`\\`\\`/g')
  local q=$(cat $tmp_prompt_quiz | sed -e 's/```/\\`\\`\\`/g')
  # to markdown
  cat <<MARKDOWN
# Prompt
generate for ${fulldate}

## Research Event
\`\`\`raw
${e}
\`\`\`

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

make_json() {
  if [ ! -f $tmp_json_novel ]; then
    echo "$tmp_json_novel not found." >&2
    echo "generate novel first." >&2
    echo "${0} -f ${fulldate} -e ${date} -s 'event, novel'" >&2
    echo "exit." >&2
    exit 1
  fi
  if [ ! -f $tmp_json_conversation ]; then
    echo "$tmp_json_conversation not found." >&2
    echo "generate conversation first." >&2
    echo "${0} -f ${fulldate} -e ${date} -s 'conversation'" >&2
    echo "exit." >&2
    exit 1
  fi
  if [ ! -f $tmp_json_quiz ]; then
    echo "$tmp_json_quiz not found." >&2
    echo "generate quiz first." >&2
    echo "${0} -f ${fulldate} -e ${date} -s 'quiz'" >&2
    echo "exit." >&2
    exit 1
  fi
  local words=$(jq -r '.body' $tmp_json_novel | wc -w | tr -d ' ')
  jq -s ".[0] * { \"word count\": ${words} } * .[1] * .[2]" \
    $tmp_json_novel $tmp_json_conversation $tmp_json_quiz
}

make_markdown() {
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
    ) | join(\"\n\n\"))" $OUTPUTS_DIR/${fulldate}.json
}


while getopts ":d:e:s:t:f:m:n:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    d|fulldate) # date of generated content
      fulldate="$OPTARG";;
    e|event) # date of event to research
      date="$OPTARG";;
    t|theme) # theme of the event
      theme="$OPTARG";;
    f|flavor) # flavor of the novel
      flavor="$OPTARG";;
    m|model) # main model to use
      main_model="$OPTARG";;
    n|novelModel) # novel model to use
      novel_model="$OPTARG";;
    s|steps) # steps to generate
      steps=()
      IFS=', ' read -r -a steps <<< "$OPTARG";;
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done

init_tmp

cat <<OPTS | jq
{
  "fulldate": "$fulldate",
  "date": "$date",
  "theme": "$theme",
  "flavor": "$flavor",
  "models": {
    "main": "$main_model",
    "novel": "$novel_model"
  },
  "steps": [$( for step in "${steps[@]}" ; do echo -n "\"$step\","; done | sed 's/,$//')],
  "temp_files": [$( for file in "${tmp_files[@]}" ; do echo -n "\"$file\","; done | sed 's/,$//')]
}
OPTS

if [[ " ${steps[@]} " =~ "event" ]]; then
  gen_event > $tmp_json_event
  if [ $? -ne 0 ]; then
    make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md
    echo "Failed to generate event." >&2
    exit 1
  fi
fi

if [[ " ${steps[@]} " =~ "novel" ]]; then
  gen_novel > $tmp_json_novel
  if [ $? -ne 0 ]; then
    make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md
    echo "Failed to generate novel." >&2
    exit 1
  fi
fi

if [[ " ${steps[@]} " =~ "conversation" ]]; then
  cat $tmp_json_novel \
    | jq -r '.body' \
    | gen_conversation > $tmp_json_conversation
  if [ $? -ne 0 ]; then
    make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md
    echo "Failed to generate conversation." >&2
    exit 1
  fi
fi

if [[ " ${steps[@]} " =~ "quiz" ]]; then
  jq -s -r '"# " + .[0].title + "\n\n" + .[0].body + "\n\n" + (.[1].dialog | map(keys[0] + ": " + .[keys[0]]) | "## Dialog\n\n" + join("\n"))' $tmp_json_novel $tmp_json_conversation \
    | gen_quiz >  $tmp_json_quiz
  if [ $? -ne 0 ]; then
    make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md
    echo "Failed to generate quiz." >&2
    exit 1
  fi
fi

make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md

if [[ " ${steps[@]} " =~ "make" ]]; then
  make_json > $OUTPUTS_DIR/${fulldate}.json
  make_markdown > $OUTPUTS_DIR/${fulldate}.md
fi
