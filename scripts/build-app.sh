#!/bin/bash

docker-compose stop app
docker container rm app
docker volume rm app-node-cache
docker-compose build app
docker-compose up -d
