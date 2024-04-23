#!/bin/bash


vault server -config=/vault/config/vault-config.json & pid=$!

vault operator init > text2

wait $pid