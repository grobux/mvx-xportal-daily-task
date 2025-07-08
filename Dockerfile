FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env ./

RUN apt-get update && apt-get install -y tzdata

CMD ["npm", "start"]
