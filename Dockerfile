FROM node:16-alpine AS builder
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine
RUN apk add dumb-init
ENV NODE_ENV=production
ENV PORT=8000
WORKDIR /app
COPY --from=builder --chown=node:node ["/app/package.json", "/app/yarn.lock", "./"]
RUN yarn install --prod
COPY --from=builder --chown=node:node ["/app/build", "./build"]
EXPOSE 8000
USER node
CMD [ "dumb-init", "node", "build/index.js" ]
