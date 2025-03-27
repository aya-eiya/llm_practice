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

OUTPUT="${OUTPUT_DIR}/101.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  PARAMS=""
  bash -c "$STEP_101" | tee ${OUTPUT}
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/102.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.[0].summary' "${INPUT}"`
  bash $STEP_102 --text="$DATA" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/201.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.mod' "${INPUT}"`
  bash $STEP_201 --summary="$DATA" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/202.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.' "${INPUT}"`
  bash $STEP_202 --plot="$DATA" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/203.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.' "${INPUT}"`
  bash $STEP_203 --novel="$DATA" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/302.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.' "${INPUT}"`
  bash $STEP_302 --novel="$DATA" --level="1" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/401.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists ${OUTPUT}"
else
  DATA=`jq -rc '.' "${INPUT}"`
  bash $STEP_401 --novel="$DATA" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

OUTPUT="${OUTPUT_DIR}/501.json"
if [ -s "${OUTPUT}" ]; then
  echo "Already exists 501.json"
else
  DATA1=`jq -rc '.' "${INPUT}"`
  DATA2=`jq -rc '.' "${INPUT}"`
  bash $STEP_501 --novel="$DATA1" --dialogue="$DATA2" | tee "${OUTPUT}"
fi
INPUT="${OUTPUT}"

