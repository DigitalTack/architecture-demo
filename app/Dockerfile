FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install
COPY . /app
EXPOSE 3000
EXPOSE 6006

CMD ["npm", "run", "dev"]
