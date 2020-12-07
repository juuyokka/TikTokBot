# Stage 1: Build
FROM node:14
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Copy Dist
FROM zenika/alpine-chrome:with-puppeteer
WORKDIR /usr/app
USER root
COPY package*.json ./
RUN npm install --production
COPY --from=0 /usr/app/dist ./dist
CMD [ "npm", "start" ]
