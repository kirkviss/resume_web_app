# Dockerfile 
# TODO create doccker file proper
FROM node:7.10 as build-deps
WORKDIR 
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build