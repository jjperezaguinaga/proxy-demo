FROM node:dubnium-alpine

ENV YARN_CACHE_FOLDER /yarn
WORKDIR /app/

# Add entrypoint script to handle yarn cache
RUN mkdir -p $YARN_CACHE_FOLDER
COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

ADD . .

EXPOSE 3000
EXPOSE 3001

CMD ["yarn", "start"]

