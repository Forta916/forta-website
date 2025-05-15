#!/bin/bash

# Production start script for Forta website
echo "Starting Forta website in production mode..."

# Navigate to project root (adjust if needed)
cd ..

# Set production environment variables
export NODE_ENV=production
export PORT=3000

# Start the Next.js application
echo "Starting Next.js server on port $PORT..."
npm run start

# Note: For background running, use:
# pm2 start npm --name "forta-website" -- start
