FROM node:22.15.0-bookworm-slim
ENV NODE_ENV=production
WORKDIR /app
COPY server/package.json server/package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm cache clean --force
COPY server/app.mjs server/email.mjs server/index.mjs ./
USER node
EXPOSE 3024
CMD ["node", "index.mjs"]
