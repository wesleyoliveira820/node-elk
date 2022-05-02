FROM node:16-alpine

WORKDIR /usr/app/

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD ["yarn", "nodemon", "src/main.js"]

EXPOSE 3334
