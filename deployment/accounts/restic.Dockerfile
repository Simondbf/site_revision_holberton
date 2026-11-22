FROM alpine:3.21
RUN apk add --no-cache restic openssh-client ca-certificates \
 && addgroup -g 1000 backups \
 && adduser -D -u 1000 -G backups -h /home/backups backups
USER backups
ENV HOME=/home/backups
ENTRYPOINT ["restic"]
