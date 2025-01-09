# Use a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta que o servidor irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
