# syntax=docker/dockerfile:1
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN --mount=type=secret,id=project_id,env=PROJECT_ID \
    --mount=type=secret,id=database_url,env=DATABASE_URL \
    echo "Project ID: $PROJECT_ID"

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]