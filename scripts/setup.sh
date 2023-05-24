#!/bin/bash

# create certs required for HTTPS
echo "setting up certs..."
yarn install
node scripts/create-certs

echo "Done"
