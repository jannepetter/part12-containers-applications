FROM node:20

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:8080/api/

COPY ./package-lock.json .
COPY ./package.json .
RUN npm ci

CMD ["npm", "run", "dev","--","--host"]