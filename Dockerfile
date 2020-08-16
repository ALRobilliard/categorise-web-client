FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG REACT_APP_BASE_API_URL
ENV REACT_APP_BASE_API_URL=${REACT_APP_BASE_API_URL} 
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts@3.4.1
COPY . ./
RUN yarn build

RUN yarn global add serve
CMD serve -l $PORT -s build