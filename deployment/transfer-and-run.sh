#!/bin/bash

# Simple script to transfer files to the server and run the application
# Usage: ./transfer-and-run.sh username server_ip destination_path

if [ $# -lt 3 ]; then
  echo "Usage: ./transfer-and-run.sh username server_ip destination_path"
  echo "Example: ./transfer-and-run.sh admin 192.168.1.100 /var/www/forta-website"
  exit 1
fi

USERNAME=$1
SERVER_IP=$2
DEST_PATH=$3

echo "Building the Next.js application..."
cd ..
npm run build

echo "Creating a production build archive..."
mkdir -p .deploy
cp -r .next package.json package-lock.json next.config.ts public .deploy/

echo "Transferring files to the server..."
scp -r .deploy/* $USERNAME@$SERVER_IP:$DEST_PATH

echo "Installing dependencies and starting the application on the server..."
ssh $USERNAME@$SERVER_IP "cd $DEST_PATH && npm ci --production && npm run start"

echo "Cleaning up local deployment files..."
rm -rf .deploy

echo "Deployment complete! The application should now be running on your server."
