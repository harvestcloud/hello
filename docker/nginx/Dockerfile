ARG VERSION

FROM nginx:${VERSION}-alpine

ARG PHP_FPM_HOSTNAME

# Copy nginx config
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN sed -i s/PHP_FPM_HOSTNAME/${PHP_FPM_HOSTNAME}/g /etc/nginx/conf.d/default.conf
