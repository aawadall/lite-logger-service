FROM node:alpine

ADD . /app 

WORKDIR /app 

CMD [ "npm","install" ]

EXPOSE 3000

ENTRYPOINT [ "/app/start.sh" ]