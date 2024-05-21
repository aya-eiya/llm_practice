#!/bin/bash

titles=$(git grep -h "title" "../../frontend-web/data/2024-*/2024-*.ts")
# 使用されている文字をユニークに抽出
chars=$(echo "$titles" | grep -o . | sort | uniq)
echo "$chars" | tr -d '\n' > font-subset.txt

# フォントのサブセットを作成
pyftsubset ./font.otf --text-file=font-subset.txt --output-file=./subset.otf
