# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

komentoja:  
docker compose -f docker-compose.dev.yml up -d  
docker compose -f docker-compose.dev.yml down --volumes  

Tuolla käynnistyy vaan redis ja mongo. Käynnistä backend kans

front cont
docker build -t todo-frontend .
docker run -p 5173:5173 todo-frontend

jäit 12.21