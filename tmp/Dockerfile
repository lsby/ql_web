FROM node:13-alpine
ADD . /code
WORKDIR /code
ENV HOME=/code
RUN npm i && npm run build && npx pm2 set pm2-logrotate:max_size 10M
CMD npm start && npm run logs
