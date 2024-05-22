#! /bin/bash

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
OUTPUTS_DIR="${CURRENT_DIR}/../outputs"

create_llm_cmd() {
  local model=$1
  if [ -f "${CURRENT_DIR}/../models/${model}.py" ]; then
    echo python "${CURRENT_DIR}/../models/${model}.py"
  else
    echo "ollama run ${model}"
  fi
}

## TMP files
init_tmp () {
  tmp_prompt_pattern=/tmp/.gen_pattern_${fulldate}.prompt
  tmp_prompt_vocabularies=/tmp/.gen_vocabularies_${fulldate}.prompt
  tmp_prompt_keywords=/tmp/.gen_keywords_${fulldate}.prompt
  
  tmp_out_pattern=/tmp/.gen_pattern_${fulldate}.raw.txt
  tmp_out_vocabularies=/tmp/.gen_vocabularies_${fulldate}.raw.txt
  tmp_out_keywords=/tmp/.gen_keywords_${fulldate}.raw.txt

  tmp_json_pattern=/tmp/.gen_pattern_${fulldate}.json
  tmp_json_vocabularies=/tmp/.gen_vocabularies_${fulldate}.json
  tmp_json_keywords=/tmp/.gen_keywords_${fulldate}.json
  
  tmp_files=(
    ${tmp_prompt_pattern}
    ${tmp_prompt_vocabularies}
    ${tmp_prompt_keywords}
    ${tmp_out_pattern}
    ${tmp_out_vocabularies}
    ${tmp_out_keywords}
    ${tmp_json_pattern}
    ${tmp_json_vocabularies}
    ${tmp_json_keywords}
  )
}


## models
main_model="llama3"

try_gen_pattern() {
  local lines="${1}"
  local pattern="
Generate JSON.
Analyze the basic five sentence patterns used in the following sentences.
Express them using the notation 'S, V, O, C' where applicable.
The basic five sentence pattern is 'S + V', 'S + V + C', 'S + V + O', 'S + V + O + O', 'S + V + O + C'.
Deescribe each pattern with a brief explanation from the sentences.

\`\`\`
${lines}
\`\`\`

The output must be a JSON object, its type is described following typescript code.
\`\`\`
Type Grammar = {
  \"grammar\" : { // required as root key
    \"patterns\": { // required as object key, \"patterns\" is array its length is limited to 5
      \"pattern\": \"S + V', 'S + V + C\" | \"S + V + O\" | \"S + V + O + O\" | \"S + V + O + C\", // pattern name
      \"explanation\": string, // brief explanation of the pattern
      \"usage\": string[], // pickup the sentence as usage do not modify or trim the sentence
      \"words\": [ // \"words\" is array of single key objects
        {
          \"S\": string[], // required. Subject parts of the usage sentence.
        },
        {
          \"V\": string[], // required. Verb parts of the usage sentence.
        },
        {
          \"O\": string[], // Object parts of the usage sentence. required if the pattern is \"S + V + O\" or \"S + V + O + O\" or \"S + V + O + C\" .
        },
        {
          \"C\": string[], // Complement parts of the usage sentence. required if the pattern is \"S + V + O + C\".
        }
      ]
    }[]
  }
}
\`\`\`
\"grammar\" is the root key, contains \"patterns\" as pattern object array.
Output is only one single JSON."

  echo "${pattern}" > $tmp_prompt_pattern
  timeout 120 ${run_llm} "${pattern}" \
  | tee $tmp_out_pattern \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq 'if (.grammar.patterns | .[0].words | type | . != "array")
    then ("format error\n" | halt_error(1))
    else . end'
}

gen_pattern() {
  local lines="${1}"
  local cnt=0

  while true; do
    try_gen_pattern "${lines}" && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}


try_gen_vocabularies() {
  local novel="${1}"
  local vocabularies="
Generate JSON.
Pickup 8 important words from following passage to understand the passage.

\`\`\`
${novel}
\`\`\`

Describe the each picked words meaning in dictionary,

The output must be a JSON object, its type is described following typescript code.
\`\`\`
type Grammar = {
  \"grammar\" : { // required as root key, length of the array is 8
    \"vocabularies\": { // required as object key
      \"class\": \"Noun\" | \"Pronoun\" | \"Adjective\" | \"Adverb\" | \"Verb\" | \"Preposition\" | \"Conjunction\" | \"Interjection\" | \"Other\"
      \"word\": string, // pickup the word from the passage without any modification
      \"meaning\": string, // The meaning of the word in context
      \"usage\": string[], // pickup some sentence from the sentences that use the word, do not modify or trim the sentence
      \"pronounce\": string, // Illustrate with International Phonetic Alphabet
      \"example\": string // generate new sentence of the word usage
    }[]
  }
}
\`\`\`
\"grammar\" is the root key, an object, not array, contains \"vocabularies\". \"vocabularies\" is vocabulary object array.
Output is only one single JSON."

  echo "${vocabularies}" > $tmp_prompt_vocabularies
  timeout 120 ${run_llm} "${vocabularies}" \
  | tee $tmp_out_vocabularies \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq 'if (.grammar.vocabularies | .[0].usage | type | . != "array")
    then ("format error 1" | halt_error(1))
    else . end'
}

gen_vocabularies() {
  local novel="${1}"
  local cnt=0
  
  while true; do
    try_gen_vocabularies "${novel}" && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

try_gen_keywords() {
  local novel="${1}"
  local keywords="
Generate JSON.

Create 12 keywords that is best describe the following passage from the following passage.

\`\`\`
${novel}
\`\`\`

The output is JSON as following format.
\`\`\`
{
  \"keywords\": string[]
}
\`\`\`
And the output JSON only."

  echo "${keywords}" > $tmp_prompt_keywords
  timeout 60s ${run_llm} "${keywords}" \
  | tee $tmp_out_keywords \
  | tr -d '\n' \
  | tr -d '\`' \
  | sed -n -e 's/^.*\({.*}\).*$/\1/p' \
  | jq '{ "keywords": .keywords }'
}

gen_keywords() {
  local novel="${1}"
  local cnt=0
  while true; do
    try_gen_keywords "${novel}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done

}

while getopts ":d:e:s:t:f:m:n:-:" opt; do
  if [ "$opt" = "-" ]; then
    opt="${OPTARG%%=*}"
    OPTARG="${OPTARG#$opt}"
  fi
  OPTARG="${OPTARG#=}"
  case $opt in
    d|fulldate) # date of generated content
      fulldate="$OPTARG";;
    c|clear) # clear step tmp files
      clear="true";;
    m|model) # main model to use
      main_model="$OPTARG";;
    \?)
      echo "Invalid option: -"$OPTARG"" >&2
      exit 1;;
    : )
      echo "Option -"$OPTARG" requires an argument." >&2
      exit 1;;
  esac
done

if [ "$fulldate" = "" ]; then
  ## date
  fulldate=$(date "+%Y-%m-%d")
fi

init_tmp
org_json="${OUTPUTS_DIR}/${fulldate}.json"
out_json="${OUTPUTS_DIR}/${fulldate}.desc.json"

if [ "${clear}" = "clear" ]; then
  rm -f ${tmp_files[@]} ${out_json}
  exit 0
fi

cat <<OPTS | jq
{
  "fulldate": "$fulldate",
  "models": {
    "main": "$main_model"
  },
  "temp_files": [$( for file in "${tmp_files[@]}" ; do echo -n "\"$file\","; done | sed 's/,$//')]
}
OPTS

if [ ! -f "${org_json}" ]; then
  echo "'${org_json}' File not found."
  exit 1
fi
run_llm=$(create_llm_cmd "$main_model")

if [ ! -f $tmp_json_pattern ] || [ "$(jq 'has("grammar")' $tmp_json_pattern)" != "true" ]; then
  echo "gen pattern"
  gen_pattern "$(jq '[.body] + (.dialog | map(. | to_entries | map(.value)) | flatten) | map(. | sub("(?<M>\\.|\\?|\\!)"; "\(.M)<||>"; "gm")| split("<||>")) | flatten | map(.|ltrimstr(" ")|select(.|length|.>12))' ${org_json})" > $tmp_json_pattern
else
  echo "skip gen pattern"
fi

if [ ! -f $tmp_json_vocabularies ] || [ "$(jq 'has("grammar")' $tmp_json_vocabularies)" != "true" ]; then
  echo "gen vocabularies"
  gen_vocabularies "$(jq -r '.body' ${org_json})" > $tmp_json_vocabularies
else
  echo "skip gen vocabularies"
fi

if [ ! -f $tmp_json_keywords ] || [ "$(jq 'has("keywords")' $tmp_json_keywords)" != "true" ]; then
  echo "gen keywords"
  gen_keywords "$(jq -r '.body' ${org_json})" > $tmp_json_keywords
else
  echo "skip gen keywords"
fi


jq -s '.[0] * { "descriptions": (.[1] * .[2] * .[3]) }' "${org_json}" \
  "${tmp_json_pattern}" \
  "${tmp_json_vocabularies}" \
  "${tmp_json_keywords}" \
  > "${out_json}"
