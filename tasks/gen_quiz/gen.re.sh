ds=(
)

themes=(
  "--theme=\"Archeology\" --flavor=\"Academic Essay\""
  "--theme=\"Archeology\" --flavor=\"Gothic\""
  "--theme=\"Archeology\" --flavor=\"Mystery\""
  "--theme=\"Archeology\" --flavor=\"Romance\""
  "--theme=\"Archeology\" --flavor=\"Science Fiction\""
  "--theme=\"Architecture\" --flavor=\"Academic Essay\""
  "--theme=\"Architecture\" --flavor=\"Fantasy\""
  "--theme=\"Architecture\" --flavor=\"Science Fiction\""
  "--theme=\"Architecture\" --flavor=\"Steampunk\""
  "--theme=\"Art\" --flavor=\"Academic Essay\""
  "--theme=\"Art\" --flavor=\"Gothic\""
  "--theme=\"Art\" --flavor=\"Romance\""
  "--theme=\"Art\" --flavor=\"Steampunk\""
  "--theme=\"Culture\" --flavor=\"Academic Essay\""
  "--theme=\"Culture\" --flavor=\"Fantasy\""
  "--theme=\"Culture\" --flavor=\"Historical Fiction\""
  "--theme=\"Dance\" --flavor=\"Fantasy\""
  "--theme=\"Dance\" --flavor=\"Science Fiction\""
  "--theme=\"Design\" --flavor=\"Academic Essay\""
  "--theme=\"Design\" --flavor=\"Magical Realism\""
  "--theme=\"Economy\" --flavor=\"Steampunk\""
  "--theme=\"Economy\" --flavor=\"Thriller\""
  "--theme=\"Education\" --flavor=\"Young Adult\""
  "--theme=\"Engineering\" --flavor=\"Science Fiction\""
  "--theme=\"Ethics\" --flavor=\"Academic Essay\""
  "--theme=\"Ethics\" --flavor=\"Crime\""
  "--theme=\"Fashion\" --flavor=\"Cyberpunk\""
  "--theme=\"Fashion\" --flavor=\"Historical Romance\""
  "--theme=\"Fashion\" --flavor=\"Romance\""
  "--theme=\"Fashion\" --flavor=\"Steampunk\""
  "--theme=\"Film\" --flavor=\"Gothic\""
  "--theme=\"Film\" --flavor=\"Horror\""
  "--theme=\"Film\" --flavor=\"Post-Apocalyptic\""
  "--theme=\"Mathematics\" --flavor=\"Academic Essay\""
  "--theme=\"Mathematics\" --flavor=\"Dystopian\""
  "--theme=\"Mathematics\" --flavor=\"Steampunk\""
  "--theme=\"Music\" --flavor=\"Cyberpunk\""
  "--theme=\"Music\" --flavor=\"Horror\""
  "--theme=\"Music\" --flavor=\"Romance\""
  "--theme=\"Philosophy\" --flavor=\"Romance\""
  "--theme=\"Philosophy\" --flavor=\"Surrealism\""
  "--theme=\"Photography\" --flavor=\"Historical Romance\""
  "--theme=\"Photography\" --flavor=\"Post-Apocalyptic\""
  "--theme=\"Photography\" --flavor=\"Thriller\""
  "--theme=\"Politics\" --flavor=\"Courtroom Drama\""
  "--theme=\"Politics\" --flavor=\"Science Fiction\""
  "--theme=\"Politics\" --flavor=\"Thriller\""
  "--theme=\"Science\" --flavor=\"Gothic\""
  "--theme=\"Science\" --flavor=\"Horror\""
  "--theme=\"Science\" --flavor=\"Steampunk\""
  "--theme=\"Science\" --flavor=\"Thriller\""
  "--theme=\"Society\" --flavor=\"Courtroom Drama\""
  "--theme=\"Society\" --flavor=\"Mystery\""
  "--theme=\"Technology\" --flavor=\"Academic Essay\""
  "--theme=\"Technology\" --flavor=\"Cyberpunk\""
  "--theme=\"Technology\" --flavor=\"Horror\""
  "--theme=\"Technology\" --flavor=\"Post-Apocalyptic\""
  "--theme=\"Theater\" --flavor=\"Romance\""
  "--theme=\"Theater\" --flavor=\"Steampunk\""
  "--theme=\"Theater\" --flavor=\"Thriller\""
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
  #if [ -f "./outputs/${d}.json" ] &&
  #   [ "$(jq '.body | split(" ") | length | . > 130' "./outputs/${d}.json")" = "true" ] &&
  #   [ "$(jq '.params.theme != null' "./outputs/${d}.json")" = "true" ]; then
  #  echo "skip $d"
  #  export_ts ./outputs/${d}.json > ../../frontend-web/data/${ts_dir}/${d}.ts
  #  continue
  #fi
  seed=$((RANDOM % ${#themes[@]} + 1))
  theme=${themes[${seed}]}

  echo "date:${d} seed: ${seed} theme: ${theme}"

  bash -c "./scripts/gen_novel.sh --fulldate=${d} ${theme} --model=\"$model\" --novelModel=\"$novel_model\""
  if [ -f "./outputs/${d}.json" ] && [ "$(jq '.body | split(" ") | length | . > 130' "./outputs/${d}.json")" = "true" ]; then
    export_ts ./outputs/${d}.json > ../../frontend-web/data/${ts_dir}/${d}.ts
  fi
done
