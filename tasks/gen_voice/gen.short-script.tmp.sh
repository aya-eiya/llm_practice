#!/bin/bash

fulldate=${1}
inputfile="../gen_quiz/outputs/${fulldate}.json"
curriculum="../gen_quiz/scripts/curriculum.json"

curl -X GET "http://localhost:8000/bookshelf?date=${fulldate}&img=jpg" --output /tmp/.gen_voice_img.jpg

jq -s "[
  { \"Effect\": \"silence=1000,fade_music=[\\\"musics/Opening_2.mp3\\\",duration=:header,start=0,fade=2000]\" },
  { \"Effect\": \"silence=1000,talk_speed=1.0\" },
  { \"System\": \"My-niq Short Listening Challenge!\" },
  { \"System\": \"Let's listen to the following text and try to fill in the blank words in the subtitles!\" },
  { \"Effect\": \"silence=1000,talk_speed=1.1\" },
  { \"Narrator\": .[0].title },
  { \"Effect\": \"silence=500,label=:header\" }
]" "${inputfile}" "${curriculum}" > /tmp/gen_voice_header.json
python scripts/segment_body.py "$(jq -r -c '.body' ${inputfile} )" | jq '. | map({"Narrator":.|gsub("^ +| +$"; "")|gsub("&npsp;"; " ")})' > /tmp/gen_voice_body.json
jq -n "[
  { \"Effect\": \"silence=500,fade_music=[\\\"musics/Ending_1.mp3\\\",duration=:last,start=0,fade=4000]\" },
  { \"Effect\": \"silence=3000,talk_speed=1.0\" },
  { \"System\": \"To find out the correct answers for the blanks, check out the videos on our channel.\" },
  { \"System\": \"Don't forget to subscribe for daily content that will help you improve your English!\" },
  { \"Effect\": \"silence=4000\" },
  { \"Effect\": \"silence=3000,label=:last\" }
]" > /tmp/gen_voice_footer.json
jq -s 'flatten' \
  /tmp/gen_voice_header.json\
  /tmp/gen_voice_body.json\
  /tmp/gen_voice_footer.json > /tmp/gen_voice.json

jq "." /tmp/gen_voice.json
