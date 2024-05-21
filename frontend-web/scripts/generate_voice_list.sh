#!/bin/bash

if [ "${API_KEY}" = "" ]; then
  echo "API_KEY is not set" >&2
  exit 1
fi
API="https://www.googleapis.com/youtube/v3"
PLAY_LIST_ID="PLe8rBiAN890Y9055UfPQhNWFD_A8dr9Ro"

video_ids=$(curl -X GET \
  "${API}/playlistItems?key=${API_KEY}&part=snippet&maxResults=31&playlistId=${PLAY_LIST_ID}" 2>/dev/null \
  | jq '
    .items
    | map(
      {
        "value": {
          "id": .snippet.resourceId.videoId,
          "title": .snippet.title
        },
        "key": (
          .snippet.title | capture("^\\[(?<date>[^\\]]+)\\]") | .date
        )
      }
    ) | from_entries'\
  )

echo "const videoData = $video_ids as const" > "data/videoData.ts"
echo "
export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData
" >> "data/videoData.ts"
