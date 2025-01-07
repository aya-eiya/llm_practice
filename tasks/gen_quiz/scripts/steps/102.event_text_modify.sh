#!/bin/bash

# イベントフィードのテキストを匿名化・修正する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  \"org\": \"The original text\",
  \"mod\": \"The replaced text\",
  \"changes\": [
    {
      \"orgWord\": \"original word\",
      \"modWord\": \"replaced word\",
      \"reason\": \"reason for the change\", // e.g. \"individual name\"
    },
    ...
  ]
}
"

anonymization_text() {
  ollama run ${main_model} "Anonimize following text:
  \`\`\`
  ${1}
  \`\`\`
  And generate JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * Remove the unique characteristics of the writer from the text and make it impossible to tell who wrote it.
  * Proper names of people, products, companies, etc. should be fictitious names that are a play on the name of the person, product, or company.
  * No need for gender neutralization.
  * \"org\" is the original text.
  * \"mod\" is the anonymized text.
  * \"changes\" is an array of changes, including \"orgWord\" and \"modWord\" and \"reason\".
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  anonymization_text "${text}" | jq
}

main_model="llama3.1"
text=""

while getopts ":t:m:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    t:text) # text to modify
      text="$OPTARG";;
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done


output_json
