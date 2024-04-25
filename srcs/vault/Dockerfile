FROM alpine:3.14

# set vault version
ENV VAULT_VERSION 1.8.2

# create a new directory
RUN mkdir -p /vault

# download dependencies
RUN apk --no-cache add \
      bash \
      ca-certificates \
      wget \
      curl

# download and set up vault
RUN wget --quiet --output-document=/tmp/vault.zip https://releases.hashicorp.com/vault/${VAULT_VERSION}/vault_${VAULT_VERSION}_linux_amd64.zip && \
    unzip -o /tmp/vault.zip -d /vault && \
    rm -f /tmp/vault.zip && \
    chmod +x /vault

# update PATH
ENV PATH="PATH=$PATH:$PWD/vault"

# add the config file
COPY /conf/vault-config.json /vault/config/vault-config.json
COPY tools/vault.sh /tools/vault.sh
COPY auth.py .
RUN chmod +x /tools/vault.sh

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip install hvac
# expose port 8200
EXPOSE 8200

CMD ["vault"]
