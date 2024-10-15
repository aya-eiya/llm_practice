ds=(
  #'2024-09-01' '2024-09-02' '2024-09-03' '2024-09-04' '2024-09-05' 
  #'2024-09-06' '2024-09-07' '2024-09-08' '2024-09-09' '2024-09-10'
  #'2024-09-11' '2024-09-12' '2024-09-13' '2024-09-14' '2024-09-15'
  #'2024-09-16' '2024-09-17' '2024-09-18' '2024-09-19' '2024-09-20'
  #'2024-09-21' '2024-09-22' '2024-09-23' '2024-09-24' '2024-09-25'
  #'2024-09-26' '2024-09-27' '2024-09-28' '2024-09-29' '2024-09-30'
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
