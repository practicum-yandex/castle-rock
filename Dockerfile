FROM node:14

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "build" ]

CMD [ "npm", "run", "start:server" ]