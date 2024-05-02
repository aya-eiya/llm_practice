#!/bin/bash

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
DATA_DIR=${CURRENT_DIR}/../data
# Generate data for the project

gen() {
  local YYYY_MM=${1}
  cd "${YYYY_MM}"
  find . -name "*-*-*.ts" -type f -depth 1 | sort | (
    local imports=()
    local exports=()
    while read file; do
      local name=$(basename ${file} .ts)
      local obj=$(echo "data${name}" | sed -e 's/-//g')
      imports+=("import ${obj} from './${name}.ts';")
      exports+=("  '${name}':${obj},")
    done
    cat <<EOF > index.ts
$(IFS=$'\n'; echo "${imports[*]}")

const dailyData = {
  $(IFS=$'\n'; echo "${exports[*]}")
};

export default dailyData;
EOF
  )
  # echo -e "${imports[@]}" > index.ts
  # echo -e "export {\n${exports[@]}}" >> index.ts
  cd "${DATA_DIR}"
}

cd "${DATA_DIR}"
find . -name "*-*" -type d -depth 1 | while read dir; do
    gen ${dir}
done
cd "${CURRENT_DIR}/.."
deno fmt
