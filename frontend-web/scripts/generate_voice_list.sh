#!/bin/bash

if [ "${API_KEY}" = "" ]; then
  echo "API_KEY is not set" >&2
  exit 1
fi
API="https://www.googleapis.com/youtube/v3"
PLAY_LIST_ID="PLe8rBiAN890Y9055UfPQhNWFD_A8dr9Ro"
pageToken=""
video_ids="{}"

while true; do
  case "$pageToken" in
    "")
      res=$(curl -X GET "${API}/playlistItems?key=${API_KEY}&part=snippet&maxResults=50&playlistId=${PLAY_LIST_ID}" 2>/dev/null)
      ;;
    "null")
      break
      ;;
    *)
      res=$(curl -X GET "${API}/playlistItems?key=${API_KEY}&part=snippet&maxResults=50&playlistId=${PLAY_LIST_ID}&pageToken=${pageToken}" 2>/dev/null)
      ;;
  esac
  pageToken=$(echo "$res" | jq -r '.nextPageToken | if . == null then "null" else . end')
  echo "pageToken: $pageToken"
  _video_ids=$(echo "$res" \
  | jq -s '
    .[0].items | map(
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
  video_ids=$(echo "$video_ids $_video_ids" | jq -s 'add')
done


echo "const videoData = $video_ids as const" > "data/videoData.ts"
echo "
export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData
" >> "data/videoData.ts"
