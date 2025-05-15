#!/bin/bash

# Production build script for Forta website
echo "Starting production build process for Forta website..."

# Navigate to project root (adjust if needed)
cd ..

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Test the production build locally
echo "You can test the production build locally with: npm run start"

echo "Build completed successfully!"
echo "To deploy to production server:"
echo "1. Transfer the following files/directories to your server:"
echo "   - .next/ (build output)"
echo "   - public/ (static assets)"
echo "   - package.json"
echo "   - package-lock.json"
echo "   - next.config.ts"
echo "2. On your server, run 'npm ci --production' to install production dependencies"
echo "3. Start the server with 'npm run start'"
echo ""
echo "For PM2 deployment, use: pm2 start npm --name \"forta-website\" -- start"
