FROM node:13-alpine
ADD . /code
WORKDIR /code
ENV HOME=/code
RUN npm i && npm run build
CMD npm start
