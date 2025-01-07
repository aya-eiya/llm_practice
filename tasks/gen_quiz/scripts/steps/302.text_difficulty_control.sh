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
  ollama run ${main_model} "Rewite following novel to "${level}" level:
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
novel=`
cat<<EOF
{
  "title": "The Man Who Changed the Way We Fly: A Mystery",
  "flavor": "mystery",
  "theme": "Innovation and perseverance in shaping industry trends",
  "body": [
    "Ben Baldanza, a successful entrepreneur and innovator, had always been driven by a passion for making air travel more affordable. He spent years working on his vision, pouring over financial reports, consulting with experts, and researching the market.",
    "One day, he stumbled upon an article about Spirit Airlines, a low-cost airline that was struggling to find its footing. Baldanza saw this as an opportunity to make his mark and transform the industry.",
    "He poured all of his energy into convincing investors to back his plan, but they were skeptical. 'Why would anyone want to fly with no frills?' they asked. But Baldanza knew that people would pay less for a hassle-free experience.",
    "After months of tireless efforts, Baldanza finally secured the funding he needed. He took over as CEO of Spirit Airlines and set out to revolutionize the way people flew.",
    "The early days were tough. There were long hours, endless meetings with investors, and public backlash from those who couldn't imagine flying without the usual amenities.",
    "But Baldanza persevered, convinced that his vision would eventually win over skeptics. He worked tirelessly to improve operations, streamline processes, and reduce costs.",
    "As Spirit Airlines began to take off, people started to notice a change in the air travel landscape. Other airlines began to follow suit, and soon, low-cost carriers were popping up left and right.",
    "The impact was nothing short of seismic. Air travel became more accessible and affordable for millions of passengers. People who never thought they could fly now had the opportunity to explore new destinations.",
    "Baldanza's legacy continued to inspire others in the industry. He remained a driving force behind Spirit Airlines, always pushing the boundaries of what was possible.",
    "Years later, when Baldanza passed away at 62, he left behind a lasting impact on the aviation world. His innovative spirit and perseverance had changed the way people flew forever.",
    "As news of his passing spread, tributes poured in from around the globe. Colleagues remembered his tireless work ethic, investors praised his vision, and passengers thanked him for making air travel more affordable."
  ]
}
EOF
`
while getopts ":m:n:l:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    m|model) # main model to use
      main_model="$OPTARG";;
    n|novel) # text to modify
      novel="$$OPTARG";;
    l|level) # text to modify
      level="${LEVELS[$OPTARG]}";;
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

output_json
