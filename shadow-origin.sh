#!/bin/bash

git remote set-url origin git@github.com:ebanfa/shadow-plugin-builder.git

git add .

git status

git commit -m "Shadow origin"

git push -u origin master
