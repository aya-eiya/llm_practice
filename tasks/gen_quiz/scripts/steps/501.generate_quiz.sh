#!/bin/bash

# 英語クイズを作成する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  \"novelTitle\": \"The title of the novel\",
  \"level\": \"The grammar level of conversation\",
  \"quizzes\": [
    {
      \"question\": \"The question of the quiz\",
      \"options\": [
        \"Option 1\",
        \"Option 2\",
        \"Option 3\",
        \"Option 4\",
        \"Option 5\",
      ],
      \"answer\": 1 // Index of The answer index of the quiz,
      \"reason\": \"The reason for the answer\" // The reason for the answer
    },
    ...
  ]
}
"

create_quiz () {
  local level=`echo "${novel}" | jq -r ".level"`
  ollama run ${main_model} "Read following novel and dialogues about the novel, and create 5 quizzes about the novel, as for ESL larners:
  The novel is following:
  \`\`\`
  ${1}
  \`\`\`
  And the dialogues about the novel is following:
  \`\`\`
  ${2}
  \`\`\`
  And generate JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * Keep the original story, context and meaning, just change its grammar and word difficulty level.
  * The \"novelTitle\" property is the title of the novel, keep original title.
  * The \"level\" property is exact \"${level}\", Do not change any word.
  * The \"quizzes\" property is array of quiz object,
    * "quiz object" is a JSON object with \"quiz\" as the question,
      and \"options\" as the 5 length array of the option includes 4 wrong options and 1 correct answer, and \"answer\" is index of correct answer in the \"options\",
      and \"reason\" is the logical reason for the answer.
  * The using words and grammer should be suitable for the level.
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  create_quiz "${novel}" "${dialogue}"| jq
}

main_model="llama3.1"
level=""
novel=""
dialogue=""
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
    d|dialogue) # main model to use
      dialogue="$OPTARG";;
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
  echo "Dialogue:
${dialogue}" >&2
}

if [ $verbose = true ]; then
  show_options
fi

output_json
