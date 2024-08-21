ds=(
  #'2024-08-01' '2024-08-02' '2024-08-03' '2024-08-04' '2024-08-05' 
  #'2024-08-06' '2024-08-07' '2024-08-08' '2024-08-09' '2024-08-10'
  #'2024-08-11' '2024-08-12' '2024-08-13' '2024-08-14' '2024-08-15'
  #'2024-08-16' '2024-08-17' '2024-08-18' '2024-08-19' '2024-08-20'
  #'2024-08-21' '2024-08-22' '2024-08-23' '2024-08-24' '2024-08-25'
  #'2024-08-26' '2024-08-27' '2024-08-28' '2024-08-29' '2024-08-30'
  '2024-08-31'
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
