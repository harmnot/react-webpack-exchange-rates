FROM node:alpine as build

WORKDIR /app

COPY . /app

# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]