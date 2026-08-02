ds=(
  #'2026-08-01' 
  '2026-08-02' '2026-08-03' '2026-08-04' '2026-08-05' 
  #'2026-08-06' '2026-08-07' '2026-08-08' '2026-08-09' '2026-08-10'
  #'2026-08-11' '2026-08-12' '2026-08-13' '2026-08-14' '2026-08-15'
  #'2026-08-16' '2026-08-17' '2026-08-18' '2026-08-19' '2026-08-20'
  #'2026-08-21' '2026-08-22' '2026-08-23' '2026-08-24' '2026-08-25'
  #'2026-08-26' '2026-08-27' '2026-08-28' '2026-08-29' '2026-08-30'
  #'2026-08-31'
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
