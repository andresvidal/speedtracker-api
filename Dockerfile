FROM node:slim

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 8089
CMD ["npm","start"]