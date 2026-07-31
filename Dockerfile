# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy backend
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm ci

# Copy frontend
WORKDIR /app
COPY frontend/package*.json ./frontend/
WORKDIR /app/frontend
RUN npm ci && npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install production dependencies only
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm ci --only=production

# Copy built frontend
COPY --from=builder /app/frontend/build ./public

# Copy backend source
COPY backend ./

EXPOSE 5000

CMD ["node", "index.js"]
