#!/usr/bin/env bash
kubectl apply -f k8s-config/mongo.yaml
kubectl apply -f k8s-config/server.yaml
kubectl apply -f k8s-config/client.yaml
kubectl apply -f k8s-config/app-ingress.yaml

