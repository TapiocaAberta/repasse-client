#!/bin/bash
# you must install https://www.npmjs.com/package/js-beautify
# npm i -g js-beautify

set -e

find src \( \
         -path ./bower_components -o \
         -path ./node_modules -o \
         -path ./dist \
       \) -prune -o \
    -name '*.js' \
    -or -name '*.html' \
    -or -name '*.css' \
    -or -name '*.json' \
    | xargs js-beautify --quiet --replace || true