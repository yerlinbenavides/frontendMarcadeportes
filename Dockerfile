FROM node:8.19.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start" ]