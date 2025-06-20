ds=(
  '2025-06-01' '2025-06-02' '2025-06-03' '2025-06-04' '2025-06-05' 
  '2025-06-06' '2025-06-07' '2025-06-08' '2025-06-09' '2025-06-10'
  '2025-06-11' '2025-06-12' '2025-06-13' '2025-06-14' '2025-06-15'
  '2025-06-16' '2025-06-17' '2025-06-18' '2025-06-19' '2025-06-20'
  '2025-06-21' '2025-06-22' '2025-06-23' '2025-06-24' '2025-06-25'
  '2025-06-26' '2025-06-27' '2025-06-28' '2025-06-29' '2025-06-30'
  #'2025-06-31'
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
