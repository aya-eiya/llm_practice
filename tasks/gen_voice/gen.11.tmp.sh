ds=(
  '2024-11-01' '2024-11-02' '2024-11-03' '2024-11-04' '2024-11-05' 
  '2024-11-06' '2024-11-07' '2024-11-08' '2024-11-09' '2024-11-10'
  '2024-11-11' '2024-11-12' '2024-11-13' '2024-11-14' '2024-11-15'
  '2024-11-16' '2024-11-17' '2024-11-18' '2024-11-19' '2024-11-20'
  '2024-11-21' '2024-11-22' '2024-11-23' '2024-11-24' '2024-11-25'
  '2024-11-26' '2024-11-27' '2024-11-28' '2024-11-29' '2024-11-30'
  #'2024-11-31'
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
