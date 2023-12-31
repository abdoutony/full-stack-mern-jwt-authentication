#!/usr/bin/env bash

docker build -t mern-jwt-client .
docker tag mern-jwt-client abdelkaderlounis/mern-jwt-client
docker push abdelkaderlounis/mern-jwt-client