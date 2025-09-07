FROM node:20-bookworm
# Installing libvips-dev for sharp Compatibility
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
RUN chmod -R 755 /opt/app
USER node
RUN ["yarn", "build"]
EXPOSE 2337
CMD ["yarn", "start"]