FROM node:14-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN yarn run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
CMD ["yarn", "run", "start:prod"]
