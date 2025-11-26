ds=(
  #'2025-08-01' '2025-08-02' '2025-08-03' '2025-08-04' '2025-08-05' 
  #'2025-08-06' '2025-08-07' '2025-08-08' '2025-08-09' '2025-08-10'
  #'2025-08-11' '2025-08-12' '2025-08-13' '2025-08-14' '2025-08-15'
  #'2025-08-16'
  #'2025-08-17' '2025-08-18' '2025-08-19' '2025-08-20'
  #'2025-08-21' '2025-08-22' '2025-08-23' '2025-08-24' '2025-08-25'
  #'2025-08-26' '2025-08-27' '2025-08-28' '2025-08-29' '2025-08-30'
  '2025-08-31'
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
