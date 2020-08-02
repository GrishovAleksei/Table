FROM node:latest as build-stage

WORKDIR /app

COPY package.json /app

RUN npm install

ADD src /app/src
ADD public /app/public

CMD ["npm", "start"]