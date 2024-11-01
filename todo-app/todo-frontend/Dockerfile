# Build stage for testing
FROM node:20-alpine AS test-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run test:ci

# Build stage
FROM node:20-alpine AS build-stage 
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

# Production stage
FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html