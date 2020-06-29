FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=my-app-build /app/dist/timetrackingclient /usr/share/nginx/html
COPY config/nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80