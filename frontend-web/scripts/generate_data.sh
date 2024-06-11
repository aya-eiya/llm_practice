#!/bin/bash

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
DATA_DIR=${CURRENT_DIR}/../data
# Generate data for the project

find --version 1>/dev/null 2>&1
if [ $? ] ; then
  echo gfind=find
  shopt -s expand_aliases
  alias gfind='find'
fi

gen() {
  local YYYY_MM=${1}
  cd "${YYYY_MM}"
  gfind . -maxdepth 1 -mindepth 1 -name "*-*-*.ts" -type f | sort | (
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
gfind . -maxdepth 1 -mindepth 1 -name "*-*" -type d | while read dir; do
    gen ${dir}
done
cd "${CURRENT_DIR}/.."
deno fmt
