#!/bin/bash

cd castle-rock

git checkout main
git pull

sudo docker-compose stop
sudo docker-compose build
sudo docker-compose up