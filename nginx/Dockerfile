FROM nginx:alpine

# Copier notre config NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les certificats SSL
COPY certs /etc/nginx/certs

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]