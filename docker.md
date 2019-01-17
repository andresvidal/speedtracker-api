# Build

    docker build -t andresvidal/speedtracker-api .

## Build for ARM devices

    curl https://raw.githubusercontent.com/andresvidal/speedtracker-api/debug/Dockerfile.arm32v7 | docker build -f - .

or locally:

    docker build -f Dockerfile.arm32v7 -t andresvidal/speedtracker-api:arm32v7 .

# Run

## With inline config

docker run -it --rm \
--name speedtracker-api \
-v `pwd`:/app \
-p 8089:8089 \
-e "PORT=8089" \
-e "WPT_KEY=..." \
-e "GITHUB_TOKEN=..." \
-e "PAGESPEED_API_KEY=..." \
-e "MONGODB_URI=..." \
andresvidal/speedtracker-api:latest

## With local config file

docker run -it --rm \
--name speedtracker-api \
-v `pwd`:/app \
-p 8089:8089 \
andresvidal/speedtracker-api:latest

## Run interactive session

docker exec -it speedtracker-api bash

## Test 

    http://<server-ip>:8080/v1/test/{USERNAME}/{REPOSITORY}/{BRANCH}/{PROFILE}?key={KEY}