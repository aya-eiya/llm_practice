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
  * The \"title\" property is the title of the story, After finished creating all the stories, reconsider them to be more unique and atractive from the plot title.
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
plot=`
cat<<EOF
{
  "summary": "Ben Baldanza, 62, Dies; Brought No-Frills Flying to Spirit Airlines",
  "title": "The Man Who Changed the Way We Fly: A Mystery",
  "flavor": "mystery",
  "plots": {
    "introduction": "A successful entrepreneur and innovator, Ben Baldanza's legacy in the aviation industry was marked by his efforts to bring no-frills flying to Spirit Airlines.",
    "development": "As a pioneer of low-cost airlines, Baldanza faced numerous challenges, from regulatory hurdles to public skepticism, yet he persevered, driven by his vision for affordable air travel.",
    "climax": "The story reaches its climax as Baldanza's leadership at Spirit Airlines transforms the industry, making air travel more accessible and less expensive for millions of passengers.",
    "conclusion": "Ben Baldanza's legacy serves as a testament to the power of innovation and perseverance in shaping the world around us."
  },
  "visions": [
    "How can we balance the need for affordable air travel with the desire for luxury amenities?",
    "What role do innovators like Ben Baldanza play in shaping industry trends?",
    "In what ways has the aviation industry evolved over time, and what impact has this had on travelers?"
  ]
}
EOF
`

while getopts ":m:p:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    p:plot) # summary of the event
      plot="$OPTARG";;
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done

output_json
