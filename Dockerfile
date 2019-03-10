FROM node:11.11.0-alpine
WORKDIR /app

COPY source/package.json /app/package.json
RUN yarn install

COPY source/index.js /app/index.js
COPY source/post.js /app/post.js
COPY source/test.js /app/test.js
