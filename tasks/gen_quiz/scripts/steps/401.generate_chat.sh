#!/bin/bash

# 会話文を作成する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

SPEAKERS="
{
  \"Billy\": \"An 11-year-old boy of intelligence and curiosity. His passion for science, math, and history is palpable, sparking animated discussions and insightful questions. Despite his age, Billy effortlessly navigates complex concepts and loves tinkering in his bedroom laboratory.\",
  \"Kerry\": \"A lively 12-year-old filled with curiosity and mischief. With his tousled brown hair and playful grin, he's always up to something, whether it's building LEGO masterpieces or lobbying for a pet tarantula. Despite his fun-loving nature, Kerry is sharp and perceptive, quick to spot unfairness and hypocrisy. He's a passionate debater, often discussing superheroes or critiquing movies with friends.\",
  \"Meg\": \"A 12-year-old with an insatiable love for books and boundless imagination. Always immersed in a novel or lost in her writing, she's a true bookworm with a penchant for the extraordinary. Meg's creativity knows no limits as she dreams up fantastical worlds and characters. While some may find her 'quirky,' she embraces her uniqueness, seeing magic in everyday moments.\",
  \"Lui\": \"A veteran educator with over 20 years of experience teaching social studies and history. At 42, known for his strictness and attention to detail, Lui instills values of honesty and hard work in his students. Despite his tough exterior, he's a trusted mentor and friend, inspiring a love of learning beyond the classroom.\"
}
"

TEMPLATE="
{
  \"novelTitle\": \"The title of the novel\",
  \"level\": \"The grammar level of conversation\",
  \"speaker\": [
    \"Character #1\",
    \"Character #2\",
    ...
  ], // The character names in the conversation
  \"dialogues\": [
    { \"speaker name\": \"line of chat\" }, // The line object
    ...
  ] // The conversations about the novel 
}
"

create_chat() {
  local level=`echo "${novel}" | jq -r ".level"`
  ollama run ${main_model} "Create a conversation of speakers about the novel:
  \`\`\`
  ${SPEAKERS}
  \`\`\`
  The novel is following:
  \`\`\`
  ${1}
  \`\`\`
  And generate JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * A character makes two or three statements. Other characters should respond and develop the discussion in the form of a formal conversation. The order of the statements shall be in no particular order.
  * The \"novelTitle\" property is the title of the novel, keep original title.
  * The \"level\" property is exact \"${level}\", Do not change any word.
  * The \"speakers\" property is array of speakers name.
  * The \"dialogues\" property is array of line object, "line object" is a JSON object with single key, \"speaker name\" and its value is \"line of chat\".
  * The \"dialogues\" should be a dialogue between the speakers, with each line attributed to a specific speaker.
  * The using words and grammar should be suitable for the level.
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  create_chat "${novel}" | jq
}

main_model="llama3.1"
level=""
novel=""
verbose=false
while getopts ":m:n:v:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    n|novel) # main model to use
      novel="$OPTARG";;
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

show_options() {
  echo "Model: ${main_model}" >&2
  echo "Novel:
${novel}" >&2
}

if [ $verbose = true ]; then
  show_options
fi

output_json
