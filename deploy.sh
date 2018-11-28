#!/bin/sh

npm run build
cd dist
cp index.html 404.html
git config --global user.email "wilicw1346@gmail.com"
git config --global user.name "William Chang (CI)"
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wilicw/resicolor.git master:gh-pages
cd ..
