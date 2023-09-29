#!/bin/bash

IMAGE_NAME="symbolgenerator:1.0"
CONTAINER_NAME="symbol_generator"

docker rmi $IMAGE_NAME
docker build -t $IMAGE_NAME .
docker rm -f $CONTAINER_NAME

docker run \
-p "8080:8080" \
--name $CONTAINER_NAME \
-d \
-e USE_MD33="true" \
-e DRAW_OCTAGON="false" \
$IMAGE_NAME

# Default values
#USE_MD33="true"
#DRAW_OCTAGON="false"