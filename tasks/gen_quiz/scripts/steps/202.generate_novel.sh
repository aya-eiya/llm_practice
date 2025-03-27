#!/bin/bash

# プロットから小説を作成する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  title: \"The title of the story\",
  flavor: \"The flavor of the story\",
  theme: \"The theme of the story\",
  body: [
    \"Paragraph #1\",
    \"Paragraph #2\",
    ...
  ] // The body of the story
}
"

make_novel() {
  local flavor=`echo "${plot}" | jq -r ".flavor"`
  local themes=`echo $THEMES[*] | sed -e 's/ /,/'`
  ollama run ${main_model} "Create a novel from following plot:
  \`\`\`
  ${1}
  \`\`\`
  And generate JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * The story flavor should be a \"${flavor}\" novel.
  * The \"flavor\" property must set exact value as \"${flavor}\".
  * The \"body\" property is array of paragraphs of the story, each paragraph is a string, may include some line breaks in it.
  * The story should be a novel, not a short story. That paragraph count should be 10 to 15.
  * The \"title\" property is the title of the story, After finished creating all the stories, reconsider them to be more unique and attractive from the plot title.
  * The output is only a JSON object.
  * Entire output message is proper JSON format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not start with your reply.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  make_novel "${plot}" | jq
}

main_model="llama3.1"
plot=""
verbose=false

while getopts ":m:p:v:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    p|plot) # plot of the story
      plot="$OPTARG";;
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
  echo "Plot:
${plot}" >&2
}

if [ $verbose = true ]; then
  show_options
fi

output_json
