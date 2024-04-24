#!/bin/bash


vault server -config=/vault/config/vault-config.json & pid=$!

vault secrets enable django
vault write django/config/connection `
    connection_uri="http://0.0.0.0:8000/admin"`
    username="admin"`
    password="mypassword"

wait $pid