FROM alpine:latest
RUN apk --update add openssh-client git nodejs nodejs-npm && rm -rf /var/cache/apk/* && \
    npm install -g grunt-cli