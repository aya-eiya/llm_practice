#!/bin/bash

fulldate=${1}
inputfile="../gen_quiz/outputs/${fulldate}.json"
curriculum="../gen_quiz/scripts/curriculum.json"

curl -X GET "http://localhost:8000/bookshelf?date=${fulldate}&img=jpg" --output /tmp/.gen_voice_img.jpg

jq -s "[
  { \"Effect\": \"silence=5000,fade_music=[\\\"musics/Opening_2.mp3\\\",duration=:header,start=0,fade=2000]\" },
  {
    \"Effect\": (\"talk_speed=\" + (
      .[0].params.level | split(\"_\") | .[1] | tonumber | if . < 2 then \"0.9\" elif . < 4 then \"0.95\" else \"1.0\" end
  )) },
  { \"System\": \"Hello everyone, and welcome to My-niq Podcast!\" },
  { \"System\": \"I'm your host, and I'll be sharing short English stories and conversations with you every day.\" },
  { \"System\": \"Today's episode is \" },
  { \"System\": .[0].title },
  { \"System\": (\"And the text level is \" + (
    . as \$r |
    \$r[0].params.level as \$l |
    (\$l | split(\"_\") | .[1] ) + \", \" +
    (\$r[1] | to_entries | map(select(.key == \$l) | .value) | .[0].Grammar.SimpleDescription ) + \".\"
  )) },
  { \"System\": \"Stick around till the end for five quick questions to test your understanding.\" },
  { \"System\": \"Alright then, let's get listening!\" },
  { \"Effect\": \"silence=1500,label=:header\" },
  { \"Narrator\": .[0].title }
]" "${inputfile}" "${curriculum}" > /tmp/gen_voice_header.json
python scripts/segment_body.py "$(jq -r -c '.body' ${inputfile} )" | jq '. | map({"Narrator":.|gsub("^ +| +$"; "")|gsub("&npsp;"; " ")})' > /tmp/gen_voice_body.json
jq -n "[
  { \"Effect\": \"silence=1500\" },
  { \"System\": \"Now, let's move on to the conversation between Billy, Meg, Kelly, and their teacher, Lui, after reading the novel.\" }
]" > /tmp/gen_voice_pre_dialog.json
jq '.dialog' "${inputfile}" > /tmp/gen_voice_dialog.json
jq -n "[
  { \"Effect\": \"silence=1500\" },
  { \"System\": \"Now, let's test your understanding of the novel and the dialogue with 5 questions.\" }
]" > /tmp/gen_voice_post_dialog.json
jq '.quiz | to_entries | map([
  { "System": ("Question " + (.key + 1|tostring) + ".") },
  ( .value | { "System": .question } ),
  ( .value.options | to_entries | map([
    { "System": ([.key+65]|implode|.+"."|sub("A";"EY")) },
    { "System": .value }
  ])),
  { "Effect": "silence=500" },
  { "System": "The answer is." },
  { "System": ([.value.answer+65]|implode|.+"!"|sub("A";"EY")) },
  { "System": .value.options[.value.answer] },
  { "Effect": "silence=1500" }
]) | flatten' "${inputfile}" > /tmp/gen_voice_quiz.json
jq -n "[
  { \"System\": \"That's it for today's quiz, how many did you answer correctly?\" },
  { \"Effect\": \"silence=500,fade_music=[\\\"musics/Ending_1.mp3\\\",duration=:last,start=0,fade=8000]\" },
  { \"Effect\": \"silence=5000,talk_speed=1.0\" },
  { \"System\": \"Thanks for tuning in to my channel today!\" },
  { \"System\": \"I hope you enjoyed the stories and conversations, and found the quiz challenging yet fun.\" },
  { \"System\": \"Don't forget to subscribe or follow us for more daily English learning content.\" },
  { \"System\": \"Until next time, keep practicing your English and have a wonderful day!\" },
  { \"Effect\": \"silence=15000\" },
  { \"Effect\": \"silence=3000,label=:last\" }
]" > /tmp/gen_voice_footer.json
jq -s 'flatten' \
  /tmp/gen_voice_header.json\
  /tmp/gen_voice_body.json\
  /tmp/gen_voice_pre_dialog.json\
  /tmp/gen_voice_dialog.json\
  /tmp/gen_voice_post_dialog.json\
  /tmp/gen_voice_quiz.json\
  /tmp/gen_voice_footer.json > /tmp/gen_voice.json

jq "." /tmp/gen_voice.json
