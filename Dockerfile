# Imagem base com Node.js
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do projeto para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto para o container
COPY . .

# Gera uma versão otimizada para produção
RUN npm run build

# Usa uma imagem nginx para servir a aplicação
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponha a porta que o Nginx usará
EXPOSE 80

# Inicia o servidor nginx
CMD ["nginx", "-g", "daemon off;"]