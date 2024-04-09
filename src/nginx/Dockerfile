FROM debian:bullseye

#STEP 1: install nginx
RUN apt update
RUN apt install -y nginx

#STEP 2: Download and compile Modsecurity
#install dependencies
RUN apt-get install -y ufw zlib1g-dev gcc software-properties-common git wget make build-essential autoconf automake libtool libcurl4-openssl-dev liblua5.3-dev libpcre2-dev libfuzzy-dev ssdeep gettext pkg-config libpcre3 libpcre3-dev libxml2 libxml2-dev libcurl4 libgeoip-dev libyajl-dev doxygen
RUN chmod 755 /var/www/html
RUN chown -R www-data:www-data /var/www/html
WORKDIR /usr/local/src
#clone the repo of ModSecurity and its submodules
# RUN git clone --depth 100 -b v3/master --single-branch https://github.com/SpiderLabs/ModSecurity
# WORKDIR ModSecurity
# RUN git submodule init
# RUN git submodule update
# RUN sh build.sh
# #Pre compilation step. Checks for dependencies
# RUN ./configure
# RUN ufw allow 'Nginx HTTP'
# RUN ufw allow 'Nginx HTTPS'
# Compiles the source code
# RUN make
# # Installs the Libmodsecurity to **/usr/local/modsecurity/lib/libmodsecurity.so**
# RUN make install

# #STEP 3: Download and Compile ModSecurity v3 Nginx Connector Source Code
# RUN mkdir /usr/local/src/cpg
# WORKDIR /usr/local/src/cpg
# RUN wget http://nginx.org/download/nginx-1.21.4.tar.gz
# RUN tar -xvzf nginx-1.21.4.tar.gz
# # Download the source code for ModSecurity-nginx connector
# RUN git clone https://github.com/SpiderLabs/ModSecurity-nginx
# WORKDIR nginx-1.21.4
# RUN ./configure --with-compat --with-openssl=/usr/include/openssl/ --add-dynamic-module=/usr/local/src/cpg/ModSecurity-nginx
# RUN make modules
# RUN cp objs/ngx_http_modsecurity_module.so /usr/share/nginx/modules/
# COPY ./conf/nginx.conf /etc/nginx/nginx.conf
# RUN echo "load_module modules/ngx_http_modsecurity_module.so;" >> /etc/nginx/modules-enabled/50-mod-http-modsecurity.conf 
# RUN echo "modsecurity on;" >> /etc/nginx/cpguard_waf_load.conf
# RUN echo "modsecurity_rules_file /etc/nginx/nginx-modsecurity.conf;" >> /etc/nginx/cpguard_waf_load.conf
# RUN echo "SecRuleEngine On" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecRequestBodyAccess On" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecDefaultAction \"phase:2,deny,log,status:406\"" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecRequestBodyLimitAction ProcessPartial" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecResponseBodyLimitAction ProcessPartial" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecRequestBodyLimit 13107200" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecRequestBodyNoFilesLimit 131072" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecPcreMatchLimit 250000" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecPcreMatchLimitRecursion 250000" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecCollectionTimeout 600" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecDebugLog /var/log/nginx/modsec_debug.log" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecDebugLogLevel 0" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecAuditEngine RelevantOnly" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecAuditLog /var/log/nginx/modsec_audit.log" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecUploadDir /tmp" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecTmpDir /tmp" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecDataDir /tmp" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "SecTmpSaveUploadedFiles on" >> /etc/nginx/nginx-modsecurity.conf
# RUN echo "Include /etc/nginx/cpguard_waf.conf" >> /etc/nginx/nginx-modsecurity.conf


EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
