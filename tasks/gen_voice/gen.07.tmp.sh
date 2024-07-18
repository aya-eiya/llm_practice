ds=(
  '2024-06-30'
  #'2024-07-01' '2024-07-02' '2024-07-03' '2024-07-04' '2024-07-05' 
  #'2024-07-06' '2024-07-07' '2024-07-08' '2024-07-09' '2024-07-10'
  #'2024-07-11' '2024-07-12' '2024-07-13' '2024-07-14' '2024-07-15'
  #'2024-07-16' '2024-07-17' '2024-07-18' '2024-07-19' '2024-07-20'
  '2024-07-21' '2024-07-22' '2024-07-23' '2024-07-24' '2024-07-25'
  '2024-07-26' '2024-07-27' '2024-07-28' '2024-07-29' '2024-07-30'
  '2024-07-31'
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
