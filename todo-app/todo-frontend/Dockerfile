FROM node:20

WORKDIR /usr/src/app

COPY . .
ENV VITE_BACKEND_URL=http://localhost:8080/api
RUN npm install -g serve
RUN npm ci
RUN npm run build
RUN npm run test

CMD serve dist -p 5173