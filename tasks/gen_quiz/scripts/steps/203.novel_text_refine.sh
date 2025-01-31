#!/bin/bash

# 小説のテキストを洗練させる

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

refine_novel() {
  echo "${novel}" #TODO: refine novel
}

output_json () {
  refine_novel "${novel}" | jq
}

main_model="llama3.1"
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
    n|novel) # novel
      novel="$OPTARG";;
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
