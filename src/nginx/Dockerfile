FROM debian:bookworm

# Install nginx
RUN apt update
RUN apt install -y nginx
RUN nginx -v
RUN apt-get install -y software-properties-common git
RUN apt-add-repository -ss
RUN apt update
RUN echo "deb-src http://deb.debian.org/debian/ bullseye main" >> /etc/apt/sources.list
RUN apt update
RUN mkdir -p /usr/local/src/nginx
WORKDIR /usr/local/src/nginx/
RUN apt-get install -y dpkg-dev
RUN apt source nginx
WORKDIR ~/
RUN git clone --depth 1 -b v3/master --single-branch https://github.com/SpiderLabs/ModSecurity /usr/local/src/ModSecurity/
WORKDIR /usr/local/src/ModSecurity/
RUN apt-get install -y gcc wget make build-essential autoconf automake libtool libcurl4-openssl-dev liblua5.3-dev libpcre2-dev libfuzzy-dev ssdeep gettext pkg-config libpcre3 libpcre3-dev libxml2 libxml2-dev libcurl4 libgeoip-dev libyajl-dev doxygen
RUN git submodule init
RUN git submodule update
RUN ./build.sh
RUN ./configure
RUN make -j4
RUN make install
RUN git clone --depth 1 https://github.com/SpiderLabs/ModSecurity-nginx.git /usr/local/src/ModSecurity-nginx/
WORKDIR /usr/local/src/nginx/nginx-1.19.5/
RUN apt build-dep -y nginx
RUN apt install -y uuid-dev
WORKDIR /usr/local/src/ModSecurity/
RUN ./configure --add-dynamic-module=/usr/local/src/ModSecurity-nginx --with-compat --with-openssl=/usr/include/openssl/ 
WORKDIR /usr/local/src/nginx/nginx-1.19.5/
RUN make modules
RUN cp objs/ngx_http_modsecurity_module.so /usr/share/nginx/modules/



EXPOSE 8890
CMD ["nginx", "-g", "daemon off;"]
