FROM node:slim

EXPOSE 8089
WORKDIR /app
COPY . .

RUN npm install

CMD ["npm","start"]