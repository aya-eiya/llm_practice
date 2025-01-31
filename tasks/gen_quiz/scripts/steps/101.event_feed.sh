#!/bin/bash

# NY Times RSS feed から 直近のイベントを取得する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
[
  {
    \"source\": \"https://rss.nytimes.com/services/xml/rss/nyt/Business.xml\",
    \"date\": \"2023/12/10\",
    \"category\": \"Business\",
    \"title\": \"The title\",
    \"summary\": \"Summary of the news\", // 1-4 sentences from <description> tag
    \"link\": \"https://www.nytimes.com/2023/12/10/business/economy/news-article.html\", // from <link> tag
    \"keywords\": [\"World\",\"Labor and Jobs\"] // 0-8 keywords from <category> tag
  },
  ...
]
"

CATEGORIES=('Arts' 'Business' 'Science' 'Technology' 'FashionandStyle')

read_feeds() {
  local rss="https://rss.nytimes.com/services/xml/rss/nyt/${category}.xml"
  local feeds=`curl -s $rss`
  ollama run ${main_model} "You are a simple JSON generator, Make a JSON array with the following orders.
  Read following rss feeds:
  \`\`\`
  ${feeds}
  \`\`\`
  And Pick 3 items, And generate the JSON array in the following format:
  \`\`\`
  ${TEMPLATE}
  \`\`\`,
  This order is not for generate runnable code, just output JSON data.
  The output must keep the rules strictly:
  * The \"category\" property is exact \"${category}\".
  * The \"source\" property is \"${rss}\".
  * The output is only a JSON array.
  * Entire output message is proper JSON format.
  * Do not return with markdown format.
  * Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
  * Do not describe the process of how to get the feeds.
  * Do not describe about the input or the output.
  * Do not start with your reply.
  * No need to reply as a chat message.
  * Must not include code block quote \"\`\`\`\" marks.
  " | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  read_feeds | jq
}

category=""
main_model="llama3.1"
verbose=false

while getopts ":c:m:v:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    c|category) # theme of the event
      category="$OPTARG";;
    m|model) # main model to use
      main_model="$OPTARG";;
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

if [ "$category" = "" ]; then # random category
  category=$(for i in ${CATEGORIES[@]}; do echo $i; done | shuf -n 1)
fi

show_options() {
  echo "Category: ${category}" >&2
  echo "Model: ${main_model}" >&2
}

if [ $verbose = true ]; then
  show_options
fi
output_json

