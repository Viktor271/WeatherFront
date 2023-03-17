# Build stage
FROM node:14.18.1-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Production stage
FROM nginx:1.22-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
