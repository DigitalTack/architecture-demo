FROM node:lts

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . /api

EXPOSE 5000 5000

CMD ["npm", "run", "dev"]
