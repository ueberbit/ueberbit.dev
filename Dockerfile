FROM wodby/php:8.1

COPY --chown=1000:1000 ./ /app

RUN chmod a+w /app/web/sites/default
RUN mkdir -p /app/web/sites/default/files /app/web/sites/default/private
RUN chmod 777 /app/web/sites/default/files /app/web/sites/default/private

VOLUME [ "/app" ]

WORKDIR /app

LABEL com.centurylinklabs.watchtower.lifecycle.pre-update='./hooks/watchtower/pre-update.sh'
LABEL com.centurylinklabs.watchtower.lifecycle.post-update='./hooks/watchtower/post-update.sh'
