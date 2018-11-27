#!/bin/sh

vue-cli-service build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wilicw/resicolor.git gh-pages
cd ..
