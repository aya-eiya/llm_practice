ds=(
  '2024-10-01' #'2024-10-02' '2024-10-03' '2024-10-04' '2024-10-05' 
  #'2024-10-06' '2024-10-07' '2024-10-08' '2024-10-09' '2024-10-10'
  #'2024-10-11' '2024-10-12' '2024-10-13' '2024-10-14' '2024-10-15'
  #'2024-10-16' '2024-10-17' '2024-10-18' '2024-10-19' '2024-10-20'
  #'2024-10-21' '2024-10-22' '2024-10-23' '2024-10-24' '2024-10-25'
  #'2024-10-26' '2024-10-27' '2024-10-28' '2024-10-29' '2024-10-30'
  #'2024-10-31'
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
