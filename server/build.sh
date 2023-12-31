#!/usr/bin/env bash

docker build -t mern-jwt-server .
docker tag mern-jwt-server abdelkaderlounis/mern-jwt-server
docker push abdelkaderlounis/mern-jwt-server