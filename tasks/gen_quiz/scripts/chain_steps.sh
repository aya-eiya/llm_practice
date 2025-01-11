#!/bin/bash

LANG=en_US.UTF-8
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

TODAY=`date "+%Y-%m-%d"`

STEP_DIR="${CURRENT_DIR}/steps"
OUTPUT_DIR="${CURRENT_DIR}/../outputs/${TODAY}"

STEP_101="${STEP_DIR}/101.event_feed.sh"
STEP_102="${STEP_DIR}/102.event_text_modify.sh"
STEP_201="${STEP_DIR}/201.make_novel_plot.sh"
STEP_202="${STEP_DIR}/202.generate_novel.sh"
STEP_203="${STEP_DIR}/203.novel_text_refine.sh"
STEP_302="${STEP_DIR}/302.text_difficulty_control.sh"
STEP_401="${STEP_DIR}/401.generate_chat.sh"
STEP_501="${STEP_DIR}/501.generate_quiz.sh"
STEP_503="${STEP_DIR}/503.confirm_quiz.sh"
STEP_601="${STEP_DIR}/601.generate_pr_text.sh"

mkdir -p "${OUTPUT_DIR}"

if [ -e "${OUTPUT_DIR}/101.json" ]; then
  echo "Already exists 101.json"
else
  bash $STEP_101 | tee "${OUTPUT_DIR}/101.json"
fi

if [ -e "${OUTPUT_DIR}/102.json" ]; then
  echo "Already exists 102.json"
else
  DATA=`jq -r '.[0].summary' "${OUTPUT_DIR}/101.json"`
  bash $STEP_102 --text="$DATA" | tee "${OUTPUT_DIR}/102.json"
fi

if [ -e "${OUTPUT_DIR}/201.json" ]; then
  echo "Already exists 201.json"
else
  DATA=`jq -r '.mod' "${OUTPUT_DIR}/102.json"`
  bash $STEP_201 --summary="$DATA" | tee "${OUTPUT_DIR}/201.json"
fi

if [ -e "${OUTPUT_DIR}/202.json" ]; then
  echo "Already exists 202.json"
else
  DATA=`jq -r '.' "${OUTPUT_DIR}/201.json"`
  bash $STEP_202 --plot="$DATA" | tee "${OUTPUT_DIR}/202.json"
fi

if [ -e "${OUTPUT_DIR}/203.json" ]; then
  echo "Already exists 203.json"
else
  DATA=`jq -r '.' "${OUTPUT_DIR}/202.json"`
  bash $STEP_203 --novel="$DATA" | tee "${OUTPUT_DIR}/203.json"
fi

if [ -e "${OUTPUT_DIR}/302.json" ]; then
  echo "Already exists 302.json"
else
  DATA=`jq -r '.' "${OUTPUT_DIR}/203.json"`
  bash $STEP_302 --novel="$DATA" --level="1" | tee "${OUTPUT_DIR}/302.json"
fi

if [ -e "${OUTPUT_DIR}/401.json" ]; then
  echo "Already exists 401.json"
else
  DATA=`jq -r '.' "${OUTPUT_DIR}/302.json"`
  bash $STEP_401 --novel="$DATA" | tee "${OUTPUT_DIR}/401.json"
fi


if [ -e "${OUTPUT_DIR}/501.json" ]; then
  echo "Already exists 501.json"
else
  DATA1=`jq -r '.' "${OUTPUT_DIR}/302.json"`
  DATA2=`jq -r '.' "${OUTPUT_DIR}/401.json"`
  bash $STEP_501 --novel="$DATA1" --dialogue="$DATA2" | tee "${OUTPUT_DIR}/501.json"
fi

