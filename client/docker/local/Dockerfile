ARG NODE_VERSION=16.14-alpine

FROM node as client-local-build

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY ./package*.json .

RUN npm install

RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

COPY . ${APP_HOME}

CMD [ "npm", "start" ]