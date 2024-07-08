FROM node:20

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:8080/api/

COPY . .
RUN npm install -g serve
RUN npm ci
RUN npm run build

CMD serve dist -p 5173