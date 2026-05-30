FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances en premier (cache Docker)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Lancer Vite en mode dev (avec --host pour accepter les connexions externes)
CMD ["npm", "run", "dev", "--", "--host"]