# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app

# Instalar dependencias
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copiar el código fuente y construir la aplicación
COPY . .
RUN npm run build || (echo "Build failed" && exit 1)

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exponer el puerto y ejecutar la aplicación
EXPOSE 3000
CMD ["yarn", "start"]
