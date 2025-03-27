#!/bin/bash

# 小説に使われる難易度レベルを調整する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  title: \"The title of the story\",
  flavor: \"The flavor of the story\",
  level: \"The grammar level of the story\",
  theme: \"The theme of the story\",
  body: [
    \"Paragraph #1\",
    \"Paragraph #2\",
    ...
  ] // The body of the story
}
"

LEVELS=(
  'ESL Beginner'
  'ESL Intermediate'
  'ESL Advanced'
  'Highschool Grammar Class'
  'English Studies or English literature In Tertiary Education'
)

set_level() {
  local flavor=`echo "${novel}" | jq -r ".flavor"`
  local theme=`echo "${novel}" | jq -r ".theme"`
  ollama run ${main_model} "Rewrite following novel to "${level}" level:
  \`\`\`
  ${1}
  \`\`\`
  And generate JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * Keep the original story, context and meaning, just change its grammar and word difficulty level.
  * The \"title\" property is the title, keep original title.
  * The \"flavor\" property is exact \"${flavor}\", Do not change any word.
  * The \"theme\" property is exact \"${theme}\", Do not change any word.
  * The \"level\" property is exact \"${level}\", Do not change any word.
  * The \"body\" property is array of paragraphs, each paragraph is a string, may include some line breaks in it.
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  set_level "${novel}" | jq
}

main_model="llama3.1"
level=""
novel=""
verbose=false

while getopts ":m:n:l:v:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    n|novel) # text to modify
      novel="$OPTARG";;
    l|level) # text to modify
      level="${LEVELS[$OPTARG]}";;
    v|verbose) # verbose mode
      verbose=true;;
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done

if [ "$level" = "" ]; then # random category
  idx=$((RANDOM % ${#LEVELS[@]}))
  level=${LEVELS[$idx]}
fi

show_options() {
  echo "Model: ${main_model}" >&2
  echo "Level: ${level}" >&2
  echo "Novel:
${novel}" >&2
}

if [ $verbose = true ]; then
  show_options
fi

output_json
