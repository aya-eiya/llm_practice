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

short_intro="Billy (11 years old, boy), Kerry (12 years old, boy), Meg (12 years old, girl), Lui (42 years old, male teacher)"

## Steps
steps=('event' 'novel' 'conversation' 'quiz' 'make')

create_llm_cmd() {
  local model=$1
  if [ -f "${CURRENT_DIR}/../models/${model}.py" ]; then
    echo python "${CURRENT_DIR}/../models/${model}.py"
  else
    echo "ollama run ${model} --hidethinking --nowordwrap"
  fi
}

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
    $tmp_prompt_event $tmp_prompt_novel $tmp_prompt_conversation $tmp_prompt_quiz
    $tmp_out_event $tmp_out_novel $tmp_out_conversation $tmp_out_quiz
    $tmp_json_params
    $tmp_json_event $tmp_json_novel $tmp_json_conversation $tmp_json_quiz
  )
}
## models
main_model="llama3.1"
novel_model="llava-llama3"

level=""

# Functions

## Event
try_gen_event() {
  local event="
Research an event caused at ${date} in ${theme} history.
The output is JSON of 
\`\`\`
{
  "event": string, // event title
  "details": string // event detail
}
\`\`\`
And the output JSON only.
Do not include the prompt in the output and keep it clean.
Do not include any code or other information except the JSON with the event."

  echo "${event}" > $tmp_prompt_event
  $run_llm "${event}" \
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
  local novel="
Event:
\`\`\`
${event}
\`\`\`

Curriculum:
\`\`\`
$(cat ${CURRENT_DIR}/curriculum.json)
\`\`\`

Create short ${flavor} novel that is inspired by the concept of the event and be written with about 180 words.
The novel is for a part of a test for ESL learners of ${level} in the curriculum, so that its grammar and vocabulary levels must be suitable for the level.
The title must be a unique and catchy phrase.

Do not include the prompt in the output and keep it clean.
Do not include other information except the JSON with the title and body.

The output is a JSON formatted as 
\`\`\`
{
  \"title\": string,
  \"body\": string
}
\`\`\`
And the output JSON only.
The body must be between 160 and 260 words.
Mark every paragraph with a \"[:paragraph #No]\" level.
Paragraph label must be the exact format, if it's paragraph No.1 then \"[:paragraph #1]\".
"

  echo "${novel}" > $tmp_prompt_novel
  $run_llm_novel "$novel" \
  | tee $tmp_out_novel \
  | tr '\n' ' ' \
  | sed -e 's/\s+/ /g' \
  | sed -e 's/^<body"\s:/"body":/p' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | sed -e 's/,}$/}/g' \
  | jq '{
      "title": .title,
      "body": (
        .body |
        if (
          . | test("\\[\\s*:paragraph\\s*#?\\d+\\s*\\]") | not
        ) then (
          "paragraph label not found.\n" | halt_error(1)
        )
        else .
        end |
        gsub("\\[\\s*:paragraph\\s*#?\\d+\\s*\\]"; "\n\n") |
        gsub("(^\\s+|\\s+$)"; "") |
        if (
          . | gsub("[^\\w]+"; " ") |
          gsub("(^\\s+|\\s+$)"; "") |
          split(" ") | length | .<160 or .>260
        ) then (
          "body word length error\n" | halt_error(1)
        )
        else .
        end
      )
  }' \
  | jq -s "{\"event\": ${event} ,\"date\": \"${fulldate}\"} * .[0]"
  # TODO: sanitize body not to include the name in real
}

gen_novel() {
  local cnt=0
  local event=$(cat $tmp_json_event)
  while true; do
    try_gen_novel "${event}" # 2> /dev/null
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
  local conversation="
\`\`\`
${1}
\`\`\`

Readers:
\`\`\`
${billy}
${kerry}
${meg}
${lui}
\`\`\`

Create conversation of \"Readers\" about the novel after read it.

Order of the speaker is random, and each speaker talks at least 2 times.

Output the \"dialog\" as JSON, its type is described following typescript code.

\`\`\`
type SpeakerName= 'Billy' | 'Kerry' | 'Meg' | 'Lui'
type Dialog = {
  \"dialog\": { // required as root key
    [SpeakerName]: string // string is the line, key is the speaker name, object must have only one key
  }[] // array of conversation objects
}
\`\`\`

\"dialog\" is the root key, and array of conversation objects.

thus, the output must be a JSON object with the key \"dialog\" and the value is an array of conversation objects like following example.
\`\`\`
{
  \"dialog\": [
    { \"Billy\": \"I love the novel!\" },
    ...
  ]
}
\`\`\`

Do not include the prompt in the output and keep it clean.
Do not include other information except the JSON of the \"quiz\" and its code quote \"\`\`\`\".
Do not include typescript code.
Make sure the output is a valid JSON and quoted by \"\`\`\`\" mark."

  echo "${conversation}" > $tmp_prompt_conversation
  $run_llm "$conversation" \
  | tee $tmp_out_conversation \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq '{ "dialog": .dialog }'
  # TODO: prevent dialog to be a template conversation.
}

gen_conversation() {
  while true; do
    try_gen_conversation "${1}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

## Quiz
try_gen_quiz() {
  local quiz="
\`\`\`
${1}
\`\`\`

From the above novel text and dialogue, create five quizzes to test the English reading comprehension skills.
note that the dialog characters are ${short_intro}.

The format for answering the quizzes should be a one-choice format with five options to choose from.

The output must be a JSON object, its type is described following typescript code.
\`\`\`
type Quiz = {
  \"quiz\": { // required root key
    \"question\": string,
    \"options\": string[], // length must be 5
    \"answer\": number  // index of correct choice in options
  }[] // length must be 5
}
\`\`\`
\"quiz\" is the root key and the object must have 5 question object.

Do not include the prompt in the output and keep it clean.
Do not include other information except the JSON of the \"quiz\" and its code quote \"\`\`\`\".
Do not include typescript code.
Make sure the output is a valid JSON and quoted by \"\`\`\`\" mark."

  echo "${quiz}" > $tmp_prompt_quiz
  $run_llm "${quiz}" \
  | tee $tmp_out_quiz \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | sed -e 's/"quizzes"/"quiz"/g' \
  | jq 'if (.quiz | length | . != 5 ) then ("quiz count error\n" | halt_error(1)) else . end' \
  | jq 'if (.quiz[0].options | length | . != 5 ) then ("quiz options count error\n" | halt_error(1)) else . end'
  # TODO: check the answer is correct
}

gen_quiz() {
  local cnt=0
  while true; do
    try_gen_quiz "${1}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 10 ]; then return 1; fi
  done
}

## Make Outputs
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
    return 1
  fi
  if [ ! -f $tmp_json_conversation ]; then
    echo "$tmp_json_conversation not found." >&2
    echo "generate conversation first." >&2
    echo "${0} -f ${fulldate} -e ${date} -s 'conversation'" >&2
    jq -s ".[0] * { \"word count\": ${words} }" \
      $tmp_json_novel
    return 1
  fi
  if [ ! -f $tmp_json_quiz ]; then
    echo "$tmp_json_quiz not found." >&2
    echo "generate quiz first." >&2
    echo "${0} -f ${fulldate} -e ${date} -s 'quiz'" >&2
    jq -s ".[0] * { \"word count\": ${words} } * .[1]" \
      $tmp_json_novel $tmp_json_conversation
    return 1
  fi
  local words=$(jq -r '.body' $tmp_json_novel | wc -w | tr -d ' ')
  jq -s "
    .[0] * {
      \"word count\": ${words}
    } * .[1] * .[2] * {
      \"params\": {
        \"theme\": .[3].theme,
        \"flavor\": .[3].flavor,
        \"models\": .[3].models,
        \"level\": .[3].level,
      }
    }" \
    "$tmp_json_novel" "$tmp_json_conversation" "$tmp_json_quiz" "$tmp_json_params"
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
    ) | join(\"\n\n\"))" "$OUTPUTS_DIR/${fulldate}.json"
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
    l|level) # level 1 to 8
      level="Level_$OPTARG";;
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

if [ "$fulldate" = "" ]; then
  ## date
  fulldate=$(date "+%Y-%m-%d")
fi

if [ "$date" = "" ]; then
  date_th=$(
    p=('1st' '2nd' '3rd');
    d=$(node -p -e "new Date('${fulldate}').getDate()");
    if [ $d -gt 3 ];
      then echo -n "${d}th"
      else echo -n "${p[$(($d - 1))]}"
    fi
  )
  # date='April 1st'
  date="$(node -p -e "new Date('${fulldate}').toLocaleString('default', { month: 'short' })") ${date_th}"
fi

if [ "$level" = "" ]; then
  level="Level_$(node -p -e "new Date('${fulldate}').getDay()+2")"
fi

init_tmp

if [ "$flavor" = "" ]; then
  # set random flavor
  flavor=$(echo -e "Horror\nThriller\nSF\nFantasy" | shuf -n 1)
fi

if [ "$theme" = "" ]; then
  # set random theme
  theme=$(echo -e "Design\nEconomy\nPolitics" | shuf -n 1)  
fi

cat <<OPTS | jq > $tmp_json_params
{
  "fulldate": "$fulldate",
  "date": "$date",
  "theme": "$theme",
  "flavor": "$flavor",
  "level": "$level",
  "models": {
    "main": "$main_model",
    "novel": "$novel_model"
  },
  "steps": [$( for step in "${steps[@]}" ; do echo -n "\"$step\","; done | sed 's/,$//')],
  "temp_files": [$( for file in "${tmp_files[@]}" ; do echo -n "\"$file\","; done | sed 's/,$//')]
}
OPTS

cat $tmp_json_params
run_llm=$(create_llm_cmd "$main_model")
run_llm_novel=$(create_llm_cmd "$novel_model")

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
  gen_conversation "$(jq -r '.body' $tmp_json_novel)" > $tmp_json_conversation
  if [ $? -ne 0 ]; then
    make_prompt_log_md > $OUTPUTS_DIR/${fulldate}.prompt.md
    echo "Failed to generate conversation." >&2
    exit 1
  fi
fi

if [[ " ${steps[@]} " =~ "quiz" ]]; then
  gen_quiz "$(jq -s -r '"# " + .[0].title + "\n\n" + .[0].body + "\n\n" + (.[1].dialog | map(keys[0] + ": " + .[keys[0]]) | "## Dialog\n\n" + join("\n"))' $tmp_json_novel $tmp_json_conversation)" >  $tmp_json_quiz
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

