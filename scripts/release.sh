#!/bin/bash

# 一旦出现了返回值非零，整个脚本就会立即退出
set -e
#  $1：第一个参数，-z：空
if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
# confirm
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  if [[ -z $SKIP_TESTS ]]; then
    # npm run lint
    # npm run test
    echo 'hello world'
  fi

  # build
  VERSION=$VERSION npm run build

  # changelog
  npm run changelog

  # commit
  git add -A
  git commit -m "build: build $VERSION"

  # tag version
  # npm version "$VERSION" --message "build: release $VERSION"
  # publish
  # git push origin refs/tags/v"$VERSION"
  git tag v"$VERSION"
  git push origin v"$VERSION"
  git push origin master

  if [[ $VERSION =~ "alpha" ]]
  then
    npm publish --tag alpha
  elif [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  elif [[ $VERSION =~ "rc" ]]
  then
    npm publish --tag rc
  else
    npm publish
  fi
fi