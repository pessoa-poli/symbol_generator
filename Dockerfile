FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY api ./api
COPY assets ./assets
COPY config ./config
COPY server.js ./server.js

CMD ["npm", "run", "startProd"]