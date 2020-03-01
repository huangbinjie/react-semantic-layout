#!/bin/bash

DIFF_FILE=.travis-diff.txt

function diffForPR() {
  git diff $TRAVIS_BRANCH -- ./ > $DIFF_FILE
}

function diffForPush() {
  git diff HEAD^ -- ./ > $DIFF_FILE
}

function beforeScript() {
  cd $REPOROOT

  # type 为 push 说明改动已合入
  if [[ $TRAVIS_EVENT_TYPE == "push" ]]; then
    diffForPush
  fi
  # type 为 pull_request 说明正在试图合入
  if [[ $TRAVIS_EVENT_TYPE == "pull_request" ]]; then
    diffForPR
  fi

  echo "print $DIFF_FILE"
  head -10 $DIFF_FILE

  local LINES=`awk 'END{print NR}' $DIFF_FILE`
  echo "Diff lines = $LINES"

  if [[ "$LINES" != "0" ]]; then
    echo "Run travis:before-script..."
    npm run travis:before-script
  fi
}

function doScript() {
  cd $REPOROOT

  local LINES=`awk 'END{print NR}' $DIFF_FILE`
  echo "Diff lines = $LINES"

  if [[ "$LINES" != "0" ]]; then
    echo "Run travis:script..."
    npm run travis:script
  fi
}

function afterScript() {
  cd $REPOROOT
  if [ -f $DIFF_FILE ]; then
    rm $DIFF_FILE
    echo "rm $DIFF_FILE done"
  fi
}
