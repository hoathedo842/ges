# =========================
# STEP 1: Base
# =========================
FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./


# =========================
# STEP 2: Development
# =========================
FROM base AS development

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]


# =========================
# STEP 3: Build
# =========================
FROM base AS build

RUN npm install

COPY . .

RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev


# =========================
# STEP 4: Production
# =========================
FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 8080

USER node

CMD ["node", "dist/main.js"]