FROM debian:bullseye

RUN apt-get update -y 
RUN apt-get install -y nginx
RUN apt-get install -y vim
RUN apt-get install -y curl

CMD ["nginx", "-g", "daemon off;"]



