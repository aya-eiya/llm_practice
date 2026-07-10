ds=(
  #'2026-07-01' '2026-07-02' '2026-07-03' '2026-07-04' '2026-07-05' 
  #'2026-07-06' '2026-07-07' '2026-07-08' '2026-07-09' 
  '2026-07-10'
  '2026-07-11' '2026-07-12' '2026-07-13' '2026-07-14' '2026-07-15'
  '2026-07-16' '2026-07-17' '2026-07-18' '2026-07-19' '2026-07-20'
  '2026-07-21' '2026-07-22' '2026-07-23' '2026-07-24' '2026-07-25'
  '2026-07-26' '2026-07-27' '2026-07-28' '2026-07-29' '2026-07-30'
  '2026-07-31'
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
