FROM node:20-alpine

WORKDIR /app

# Copier package.json et package-lock.json en premier
# (pour profiter du cache Docker si les dépendances ne changent pas)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Exposer le port sur lequel Fastify écoute
EXPOSE 3000

# Lancer le serveur
CMD ["npm", "run", "start"]