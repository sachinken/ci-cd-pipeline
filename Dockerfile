# --- 1. Base image ---
FROM node:20-alpine AS base

# --- 2. Dependencies layer ---
FROM base AS deps
WORKDIR /app

# Install dependencies based on package manager
COPY package.json package-lock.json* ./
RUN npm ci

# --- 3. Build layer ---
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN npm run build

# --- 4. Production image with standalone output ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# --- 5. Expose & run ---
EXPOSE 3000

CMD ["node", "server.js"]
