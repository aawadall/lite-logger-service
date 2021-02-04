FROM node:alpine

ADD . /app 

WORKDIR /app 

ENTRYPOINT ["npm","start"]

EXPOSE 3000