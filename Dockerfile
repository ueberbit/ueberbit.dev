FROM wodby/php:8.1

COPY --chown=1000:1000 ./ /var/www/html

RUN chmod a+w /var/www/html/web/sites/default
RUN mkdir -p /var/www/html/web/sites/default/files/private
RUN chmod 777 /var/www/html/sites/default/files /var/www/html/web/sites/default/files/private

WORKDIR /var/www/html

LABEL com.centurylinklabs.watchtower.lifecycle.post-update='./hooks/post-update.sh'
