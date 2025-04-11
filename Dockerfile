FROM node:16

#Create app directry
WORKDIR /usr/src/app

#Install app dependencies

COPY package*.json ./

RUN npm install


# Bundle app source
COPY simpleserver.js .

EXPOSE 8080
CMD [ "node", "simpleserver.js" ]
