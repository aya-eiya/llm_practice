ds=(
  '2024-12-01' '2024-12-02' '2024-12-03' '2024-12-04' '2024-12-05' 
  # '2024-12-06' '2024-12-07' '2024-12-08' '2024-12-09' '2024-12-10'
  # '2024-12-11' '2024-12-12' '2024-12-13' '2024-12-14' '2024-12-15'
  # '2024-12-16' '2024-12-17' '2024-12-18' '2024-12-19' '2024-12-20'
  # '2024-12-21' '2024-12-22' '2024-12-23' '2024-12-24' '2024-12-25'
  # '2024-12-26' '2024-12-27' '2024-12-28' '2024-12-29' '2024-12-30' '2024-12-31'
)

themes=(
  "--theme=\"Music\" --flavor=\"Cyberpunk\""
  "--theme=\"Art\" --flavor=\"Steampunk\""
  "--theme=\"Architecture\" --flavor=\"Science Fiction\""
  "--theme=\"Film\" --flavor=\"Horror\""
  "--theme=\"Theater\" --flavor=\"Romance\""
  "--theme=\"Dance\" --flavor=\"Fantasy\""
  "--theme=\"Fashion\" --flavor=\"Historical Romance\""
  "--theme=\"Photography\" --flavor=\"Post-Apocalyptic\""
  "--theme=\"Design\" --flavor=\"Magical Realism\""
  "--theme=\"Technology\" --flavor=\"Cyberpunk\""
  "--theme=\"Engineering\" --flavor=\"Science Fiction\""
  "--theme=\"Science\" --flavor=\"Steampunk\""
  "--theme=\"Mathematics\" --flavor=\"Dystopian\""
  "--theme=\"Philosophy\" --flavor=\"Surrealism\""
  "--theme=\"Ethics\" --flavor=\"Crime\""
  "--theme=\"Culture\" --flavor=\"Historical Fiction\""
  "--theme=\"Society\" --flavor=\"Mystery\""
  "--theme=\"Economy\" --flavor=\"Thriller\""
  "--theme=\"Politics\" --flavor=\"Science Fiction\""
  "--theme=\"Education\" --flavor=\"Young Adult\""
  "--theme=\"Art\" --flavor=\"Gothic\""
  "--theme=\"Architecture\" --flavor=\"Fantasy\""
  "--theme=\"Music\" --flavor=\"Romance\""
  "--theme=\"Film\" --flavor=\"Post-Apocalyptic\""
  "--theme=\"Theater\" --flavor=\"Steampunk\""
  "--theme=\"Dance\" --flavor=\"Science Fiction\""
  "--theme=\"Fashion\" --flavor=\"Cyberpunk\""
  "--theme=\"Photography\" --flavor=\"Historical Romance\""
  "--theme=\"Design\" --flavor=\"Magical Realism\""
  "--theme=\"Technology\" --flavor=\"Horror\""
  "--theme=\"Music\" --flavor=\"Horror\""
  "--theme=\"Economy\" --flavor=\"Steampunk\""
)

model="llama3.1"
novel_model="llama3.1"

export_ts () {
  local json_file="${1}"
  echo 'import { QuizData } from "../../domains/quiz.ts";'
  echo -n 'const data: QuizData = '
  cat ${json_file}
  echo -n 'export default data;' 
}

for d in "${ds[@]}" ; do
  ts_dir=${d::7}
  if [ -f "./outputs/${d}.json" ] && [ "$(jq '.body | split(" ") | length | . > 130' "./outputs/${d}.json")" = "true" ]; then
    echo "skip $d"
    export_ts ./outputs/${d}.json > ../../frontend-web/data/${ts_dir}/${d}.ts
    continue
  fi
  seed=$((RANDOM % (30 + 1)))
  theme=${themes[${seed}]}

  echo "date:${d} seed: ${seed} theme: ${theme}"

  bash -c "./scripts/gen_novel.sh --fulldate=${d} ${theme} --model=\"$model\" --novelModel=\"$novel_model\""
  if [ -f "./outputs/${d}.json" ] && [ "$(jq '.body | split(" ") | length | . > 130' "./outputs/${d}.json")" = "true" ]; then
    export_ts ./outputs/${d}.json > ../../frontend-web/data/${ts_dir}/${d}.ts
  fi
done
