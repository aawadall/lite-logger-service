FROM node:alpine

ADD . /app 

WORKDIR /app 

RUN npm install

ENTRYPOINT [ "npm", "start" ]