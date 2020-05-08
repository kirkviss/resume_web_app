# Dockerfile
#Stage 1: build the application
FROM node:current-slim as build-dep
RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2: Create the production environemnt
FROM nginx:1.13.12-alpine
COPY --from=build-dep /app/build /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]