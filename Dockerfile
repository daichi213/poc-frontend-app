FROM node:18-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apt update && apt install -y curl && apt install -y yarn
COPY . .
WORKDIR /usr/src/app/sample_app
RUN yarn install
