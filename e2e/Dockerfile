FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /e2e

COPY package*.json /e2e/

RUN npm install

COPY . /e2e/
