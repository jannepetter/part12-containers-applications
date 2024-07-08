FROM node:20

WORKDIR /usr/src/app

ENV MONGODB_URI=mongodb://the_username:the_password@mongo:27017/the_database
ENV TEST_MONGODB_URI=mongodb://the_username:the_password@mongo:27017/test
ENV TOKEN_PASSWORD=secret_password
ENV PORT=3003

COPY . .
RUN npm ci

CMD ["npm", "run", "start"]