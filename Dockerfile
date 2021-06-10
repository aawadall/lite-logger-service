FROM node:alpine

COPY ./lite_logger /app 

WORKDIR /app 

RUN npm install

ENTRYPOINT [ "npm", "start" ]