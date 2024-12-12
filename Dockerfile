FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 6316
CMD [ "node","index.js" ]

