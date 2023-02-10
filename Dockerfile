FROM node:14-alpine
WORKDIR /app
COPY . /app
RUN npm install -g http-server
EXPOSE 8080
CMD [ "http-server", "-p", "8080" ]
