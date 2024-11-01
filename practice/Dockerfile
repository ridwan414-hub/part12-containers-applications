FROM node:20-alpine
  
WORKDIR /usr/src/app


COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=practice:*
  

USER node

CMD npm start