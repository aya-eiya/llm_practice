ds=(
  '2025-04-01' '2025-04-02' '2025-04-03' '2025-04-04' '2025-04-05' 
  '2025-04-06' '2025-04-07' '2025-04-08' '2025-04-09' '2025-04-10'
  '2025-04-11' '2025-04-12' '2025-04-13' '2025-04-14' '2025-04-15'
  '2025-04-16' '2025-04-17' '2025-04-18' '2025-04-19' '2025-04-20'
  '2025-04-21' '2025-04-22' '2025-04-23' '2025-04-24' '2025-04-25'
  '2025-04-26' '2025-04-27' '2025-04-28' '2025-04-29' '2025-04-30'
  #'2025-04-31'
)
for d in "${ds[@]}" ; do
  echo "date:${d}"
  rm -rf example.* outputs
  bash gen.script.tmp.sh ${d}
  python ov_sample.py && \
  python join_sample.py && \
  ffmpeg -loop 1 -i "/tmp/.gen_voice_img.jpg" -i "outputs/dialog.wav" \
    -vcodec libx264 -acodec aac -ab 160k -ac 2 -ar 48000 -pix_fmt yuv420p -shortest \
    example.mp4 && \
  ffmpeg -i example.mp4 \
    -vf subtitles=outputs/dialog.srt:force_style="FontName=/System/Library/Fonts/Times.ttc;" -c:a copy \
    example.sub.mp4
  mv example.sub.mp4 .dist/${d}.mp4
  mv outputs/dialog.srt .dist/${d}.srt
done
