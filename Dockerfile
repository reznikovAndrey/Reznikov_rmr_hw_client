FROM node:lts-alpine3.15 as build
WORKDIR /app
COPY . /app/
RUN npm ci && npm run build

FROM nginx:1.23.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=build /app/etc/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]