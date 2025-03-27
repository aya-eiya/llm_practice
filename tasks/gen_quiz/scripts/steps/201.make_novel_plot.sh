#!/bin/bash

# イベントフィードから新しい小説のプロットを作成する

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TEMPLATE="
{
  \"summary\": \"The original text\",
  \"title\": \"The title of the story\",
  \"flavor\": \"The flavor of the story\",
  \"theme\": \"The suitable theme of the novel plot from the original news\",
  \"plots\": {
    \"introduction\": \"Introduction of the story\",
    \"development\": \"Development of the story\",
    \"climax\": \"Climax of the story\",
    \"conclusion\": \"Conclusion of the story\"
  },
  \"visions\": [
    \"Considerations in creating the plot of the story\",
    ...
  ]
}
"

FLAVORS=(
  'Crime' 'Cyberpunk' 'Dystopian'
  'Fantasy' 'Gothic' 'Historical Fiction'
  'Historical Romance' 'Horror' 'Magical Realism'
  'Mystery' 'Post-Apocalyptic' 'Romance' 'Science Fiction'
  'Steampunk' 'Surrealism' 'Thriller' 'Young Adult'
)

THEMES=(
  'Music' 'Art' 'Architecture' 'Film' 'Theater' 'Dance'
  'Fashion' 'Photography' 'Design' 'Technology' 'Engineering'
  'Science' 'Mathematics' 'Philosophy' 'Ethics' 'Culture'
  'Society' 'Economy' 'Politics' 'Education' 'Art' 'Architecture'
  'Music' 'Film' 'Theater' 'Dance' 'Fashion' 'Photography'
  'Design' 'Technology' 'Music' 'Economy'
)


make_novel() {
  local themes=`echo ${THEMES[*]} | sed -e 's/ /,/g'`
  local prompt="
Create a plot of a stroy from following a short real ${category} news summary:
\`\`\`
${1}
\`\`\`
And generate JSON array in the following format:
\`\`\`
${TEMPLATE}
\`\`\`
This order is not for generate runnable code, just output JSON data.
The output must keep the rules strictly:
* The story flavor should be a \"${flavor}\" novel.
* Pickup a suitable theme of the news to create a attractive plot from the following list: \"${themes}\"
* The \"theme\" property is the picked theme of the story, must one word of in the list.
* The \"title\" property is the title of the story.
* The \"flavor\" property must set exact value as \"${flavor}\".
* The \"summary\" property is the original text.
* The \"plots\" property is an object with the keys \"introduction\", \"development\", \"climax\", and \"conclusion\".
* The \"visions\" property is an array of considerations in creating the plot of the story.
* The output is only a JSON object.
* Entire output message is proper JSON format.
* Must not include chat message like \"Here is ...\" or \"Here are ...\" or other talk block or output description block.
* Do not start with your reply.
* Must not include code block quote \"\`\`\`\" marks.
"
  ollama run ${main_model} "${prompt}" | sed -e 's/\`\`\`(?json)//'
}

output_json () {
  make_novel "${summary}" | jq
}

main_model="llama3.1"
category="latest"
summary=""
flavor="mystery"
verbose=false
while getopts ":c:f:m:s:v:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    c|category) # category of the event
      category="$OPTARG";;
    f|flavor) # flavor of the story
      flavor="$OPTARG";;
    m|model) # main model to use
      main_model="$OPTARG";;
    s|summary) # summary of the event
      summary="$OPTARG";;
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

if [ "$flavor" = "" ]; then # random category
  flavor=$(for i in ${FLAVORS[@]}; do echo $i; done | shuf -n 1)
fi

show_options() {
  echo "Category: ${category}" >&2
  echo "Flavor: ${flavor}" >&2
  echo "Model: ${main_model}" >&2
  echo "Summary: ${summary}" >&2
}

if [ $verbose = true ]; then
  show_options
fi
output_json
