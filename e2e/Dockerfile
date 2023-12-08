FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /e2e

COPY package*.json /e2e/

RUN npm install

COPY . /e2e/