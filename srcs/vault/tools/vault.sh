#!/bin/bash

# Attendre que Vault soit prêt
while ! vault status > /dev/null 2>&1; do
    sleep 1
done

# Exécuter d'autres commandes une fois que Vault est prêt
echo "Vault is ready. Executing further commands..."

# Exemple : Exécutez une commande après que Vault soit prêt
vault operator init 