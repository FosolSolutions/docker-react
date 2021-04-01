#!/bin/bash

docker-compose stop api
docker container rm api
docker volume rm api-node-cache
docker-compose build api
docker-compose up -d
