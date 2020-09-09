# Stage 1: Build the application
FROM node:lts-alpine as build

WORKDIR /usr/src/app

COPY . ./

RUN yarn install
RUN npx env-cmd -f .env yarn build

# Stage 2: Deploy the application
FROM node:lts-alpine

COPY --from=build  /usr/src/app/build .

RUN yarn global add serve

EXPOSE 3000

CMD serve -s -p 3000 .
