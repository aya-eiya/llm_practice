#!/bin/bash

fulldate=${1}
inputfile="../gen_quiz/outputs/${fulldate}.json"
curriculum="../gen_quiz/scripts/curriculum.json"

jq -s "[
  {\"System\": \"Hello everyone, and welcome to Daily AI-Generated Novels and Learning Tests Podcast!\" },
  {\"System\": \"I'm your host, and I'll be sharing short English stories and conversations with you every day.\" },
  {\"System\": \"Today's epsode is \" },
  {\"System\": .[0].title },
  {\"System\": (\"And the text level is \" + (
    . as \$r |
    \$r[0].params.level as \$l |
    (\$l | split(\"_\") | .[1] ) + \", \" +
    (\$r[1] | to_entries | map(select(.key == \$l) | .value) | .[0].Grammar.SimpleDescription ) + \".\"
  )) },
  {\"System\": \"Stick around till the end for five quick questions to test your understanding.\" },
  {\"System\": \"Alright then, let's get listening!\" },
  {\"Narrator\": .[0].title }
]" "${inputfile}" "${curriculum}" > /tmp/gen_voice_header.json
jq '(.body|gsub("(?<a>[.?!]+)(?<b>.)"; "\(.a)[!SENT!]\(.b)"))|split("[!SENT!]")|map({"Narrator":.|gsub("^ +| +$"; "")})' "${inputfile}" > /tmp/gen_voice_body.json
jq -n "[{\"System\": \"Now, let's move on to the conversation between Billy, Meg, Kelly, and their teacher, Lui, after reading the novel.\"}]" > /tmp/gen_voice_pre_dialog.json
jq '.dialog' "${inputfile}" > /tmp/gen_voice_dialog.json
jq -n "[{ \"System\": \"Now, let's test your understanding of the novel and the dialogue with 5 questions.\" }]" > /tmp/gen_voice_post_dialog.json
jq '.quiz | to_entries | map([
  { "System": ("Question " + (.key + 1|tostring) + ".") },
  ( .value | { "System": .question } ),
  ( .value.options | to_entries | map([
    { "System": ([.key+65]|implode|.+"."|sub("A";"EY")) },
    { "System": .value }
  ])),
  { "System": "The answer is." },
  { "System": ([.value.answer+65]|implode|.+"!"|sub("A";"EY")) },
  { "System": .value.options[.value.answer] }
]) | flatten' "${inputfile}" > /tmp/gen_voice_quiz.json
jq -n "[
  { \"System\": \"Thanks for tuning in to my channel today!\" },
  { \"System\": \"I hope you enjoyed the stories and conversations, and found the quiz challenging yet fun.\" },
  { \"System\": \"Don't forget to subscribe or follow us for more daily English learning content.\" },
  { \"System\": \"Until next time, keep practicing your English and have a wonderful day!\" }
]" > /tmp/gen_voice_footer.json

jq -s 'flatten' \
  /tmp/gen_voice_header.json\
  /tmp/gen_voice_body.json\
  /tmp/gen_voice_pre_dialog.json\
  /tmp/gen_voice_dialog.json\
  /tmp/gen_voice_post_dialog.json\
  /tmp/gen_voice_quiz.json\
  /tmp/gen_voice_footer.json > /tmp/gen_voice.json

cat /tmp/gen_voice.json
