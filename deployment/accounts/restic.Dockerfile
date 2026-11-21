FROM alpine:3.21
RUN apk add --no-cache restic openssh-client ca-certificates
USER 1000:1000
ENTRYPOINT ["restic"]
