FROM node:current-slim

WORKDIR /usr/app/

COPY 	. .

RUN		apt-get update \
		&& apt-get install -y dumb-init \
		&& npm install -g pnpm

RUN		chmod +x init_package.sh


ENTRYPOINT	["/usr/bin/dumb-init", "--"]

CMD ["sh", "init_package.sh"]
