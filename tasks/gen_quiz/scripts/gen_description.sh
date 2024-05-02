#! /bin/bash

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
OUTPUTS_DIR="${CURRENT_DIR}/../outputs"

fulldate=${1}
org_json="${OUTPUTS_DIR}/${fulldate}.json"
out_json="${OUTPUTS_DIR}/${fulldate}.desc.json"

try_gen_pattern() {
  local novel=${1}
  local pattern="Analyze the basic five sentence patterns used in the following passage and express them using \
the notation 'S, V, O, C, (M)' where applicable. Provide usege of each pattern within the passage along with a \
brief explanation of the pattern.\
\`\`\`\n\
${novel}\n\
\`\`\`\n\
The output is JSON formatted like \n\
\`\`\`\n\
{\n\
  \"grammar\" : {\n\
    \"patterns\": [\n\
      {\n\
        \"pattern\": \"S + V\",\n\
        \"usage\": string[],\n\
        \"explanation\": string,\n\
        \"words\": [{
          \"S\": string[]\n\,
          \"V\": string[]\n\,
          ...
        }]
      },\n\
      ...\n\
    ]\n\
  }\n\
}\n\
\`\`\`\
"
  echo "${pattern}" > /tmp/.gen_pattern.prompt
  ollama run llama3 "${pattern}" \
  | tee /tmp/.gen_pattern.raw.txt \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq '{ "grammar": .grammar }'
}

gen_pattern() {
  local novel=${1}
  local cnt=0
  while true; do
    try_gen_pattern "${novel}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}


try_gen_vocabularies() {
  local novel=${1}
  local vocabularies="Pickup some important words from following passage to understand the passage,\
and describe the each words meaning in dictionary,\
and if the word is a plural form then replace it with singular form,\
and \"usage\" is the sentence that is the usage in the pssage,\
and enumerate the meanings of the word if it has multiple senses,\
and tell the word class in Noun, Pronoun, Adjective,Adverb, Verb, Preposition, Conjunction, Interjection or Other of every sense of the word,\
and generate new sentence of the word usage as \"example\" \
and the pronounce must be illustrated with International Phonetic Alphabet,\
\`\`\`\n\
${novel}\n\
\`\`\`\n\
The output is JSON formatted like \n\
\`\`\`\n\
{\n\
  \"grammar\" : {\n\
    \"vocabularies\": [\n\
      {\n\
        \"word\": \"S + V\",\n\
        \"usage\": string[],\n\
        \"pronounce\": string,\n\
        \"meanings\": [{\
          \"class\": string,\n\
          \"meaning\": string,\n\
          \"example\": string\n\
        }]\
      },\n\
      ...\n\
    ]\n\
  }\n\
}\n\
\`\`\`\
"
  echo "${vocabularies}" > /tmp/.gen_vocabularies.prompt
  ollama run llama3 "${vocabularies}" \
  | tee /tmp/.gen_vocabularies.raw.txt \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq '{ "grammar": .grammar }'
}

gen_vocabularies() {
  local novel=${1}
  local cnt=0
  while true; do
    try_gen_vocabularies "${novel}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done
}

try_gen_keywords() {
  local novel=${1}
  local keywords="In context of web marketing, identify the SEO words in the following passage. the words are the most important words in SEO, and a \"word\" is not mean only just one word but also can be two or three words more identify the feature of the passage.\
\`\`\`\n\
${novel}\
\`\`\`\n\
The output is JSON formatted like \
\`\`\`\n\
{\n\
  \"keywords\": string[]\n\
}\n\
\`\`\`
"
  echo "${keywords}" > /tmp/.gen_keywords.prompt
  ollama run llama3 "${keywords}" \
  | tee /tmp/.gen_keywords.raw.txt \
  | tr -d '\n' \
  | sed -e 's/```json/```/g' \
  | sed -n -e 's/^.*```\s*\({.*}\)```.*$/\1/p' \
  | jq '{ "keywords": .keywords }'
}

gen_keywords() {
  local novel=${1}
  local cnt=0
  while true; do
    try_gen_keywords "${novel}" 2> /dev/null && break
    cnt=$((cnt + 1))
    if [ $cnt -eq 5 ]; then return 1; fi
  done

}

if [ ! -f "${org_json}" ]; then
  echo "'${org_json}' File not found."
  exit 1
fi

# gen_pattern "$(jq -r '.body' ${org_json})" > /tmp/.gen_pattern.json
# gen_keywords "$(jq -r '.body' ${org_json})" > /tmp/.gen_keywords.json
gen_vocabularies "$(jq -r '.body' ${org_json})" > /tmp/.gen_vocabularies.json
jq -s '.[0] * { "descriptions": (.[1] * .[2] * .[3]) }' "${org_json}" /tmp/.gen_keywords.json /tmp/.gen_vocabularies.json /tmp/.gen_pattern.json > "${out_json}"
