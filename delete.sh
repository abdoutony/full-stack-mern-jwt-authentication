#!/usr/bin/env bash
kubectl delete -f k8s-config/mongo.yaml
kubectl delete -f k8s-config/server.yaml
kubectl delete -f k8s-config/client.yaml
kubectl delete -f k8s-config/app-ingress.yaml
