#!/bin/bash

# PR用のテキストを生成する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  \"novelTitle\": \"The title of the novel\",
  \"level\": \"The grammar level of conversation\",
  \"SNS\": {
    \"x\": {
      \"text\": \"\", // up to 150 length
      \"link\": \"\", // the url of the site page of the novel
    },
    \"facebook\": {
      \"text\": \"\", // up to 320 length
      \"link\": \"\", // the url of the site page of the novel
    },
  },
  \"youtube\": {
    \"full\": {
      \"text\": \"\", // up to 320 length
      \"link\": \"\", // the url of the site page of the novel
    },
    \"short\": {
      \"body\": [
        \"Paragraph #1\",
        \"Paragraph #2\",
        ...
      ], // introduction or short summary of the story for youtube short PR video, can read in 1.5 minutes
      \"fullSizeLink\": \"\", // The full size youtube video link
    }
  } // The youtube PR text
}
"

create_pr () {
  local level=`echo "${novel}" | jq -r ".level"`
  ollama run ${main_model} "Read following novel and create PR text for sns and youtube short PR text:
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
  * Keep the original story, context and meaning, just change its grammar and word difficulty level.
  * The \"novelTitle\" property is the title of the novel, keep original title.
  * The \"level\" property is exact \"${level}\", Do not change any word.
  * The using words and grammar should be suitable for the level.
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  create_pr "${novel}" | jq
}

main_model="llama3.1"
level=""
novel=""

while getopts ":m:n:-:" opt; do
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
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done

output_json
