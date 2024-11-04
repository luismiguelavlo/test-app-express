FROM node:21-alpine3.19

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

COPY . .

RUN npm install

EXPOSE 7000

CMD ["npm", "start"]