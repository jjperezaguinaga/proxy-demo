FROM node:dubnium-alpine

ENV NODE_ENV=production

RUN apk add --no-cache tini

WORKDIR /node
COPY package.json yarn.lock ./
RUN mkdir app && chown -R node:node .
USER node
RUN yarn install && yarn cache clean --force

WORKDIR /node/app
COPY --chown=node:node . .

EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["/sbin/tini", "-e", "143", "--"]
CMD ["node", "server.js"]