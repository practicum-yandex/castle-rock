#!/bin/bash

cd castle-rock

git checkout main
git pull

docker-compose build
docker-compose up