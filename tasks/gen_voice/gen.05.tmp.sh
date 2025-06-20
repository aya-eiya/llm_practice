ds=(
  #'2025-05-01' '2025-05-02' '2025-05-03' '2025-05-04' '2025-05-05' 
  #'2025-05-06' '2025-05-07' '2025-05-08' 
  '2025-05-09' '2025-05-10'
  '2025-05-11' '2025-05-12' '2025-05-13' '2025-05-14' '2025-05-15'
  '2025-05-16' '2025-05-17' '2025-05-18' '2025-05-19' '2025-05-20'
  '2025-05-21' '2025-05-22' '2025-05-23' '2025-05-24' '2025-05-25'
  '2025-05-26' '2025-05-27' '2025-05-28' '2025-05-29' '2025-05-30'
  '2025-05-31'
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
