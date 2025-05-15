# Forta Website Deployment Guide

This guide provides instructions for deploying the Forta website to a production server.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Access to the production server
- SSL certificate (already available in `deployment/cert/`)

## Build Process

### 1. Building the Application

Run the build script to create a production-ready build:

```bash
# Make the script executable
chmod +x deployment/build-production.sh

# Run the build script
./deployment/build-production.sh
```

This will:
- Install all dependencies
- Build the Next.js application
- Provide instructions for deployment

### 2. Testing the Build Locally

Before deploying, you can test the production build locally:

```bash
npm run start
```

Visit `http://localhost:3000` to verify everything works correctly.

## Deployment Process

### 1. Transfer Files to Production Server

Transfer the following files/directories to your production server:

```
.next/           # Build output
public/          # Static assets
package.json     # Package configuration
package-lock.json # Dependency lock file
next.config.ts   # Next.js configuration
```

You can use SCP, SFTP, or any other file transfer method:

```bash
# Example using scp (replace with your server details)
scp -r .next public package.json package-lock.json next.config.ts user@your-server:/path/to/forta-website/
```

### 2. Install Production Dependencies

On the production server:

```bash
cd /path/to/forta-website
npm ci --production
```

### 3. Start the Application

Use the start script:

```bash
# Make the script executable
chmod +x deployment/start-production.sh

# Run the start script
./deployment/start-production.sh
```

### 4. Process Management (Recommended)

For keeping the application running in the background, use PM2:

```bash
# Install PM2 if not already installed
npm install -g pm2

# Start the application with PM2
pm2 start npm --name "forta-website" -- start

# Set PM2 to start on system boot
pm2 startup
pm2 save
```

## SSL Configuration

The SSL certificate is located in `deployment/cert/forta-usa.com.pem`. If you're using a reverse proxy like Nginx or Apache, configure it to use this certificate.

## Troubleshooting

If you encounter issues:

1. Check the application logs
2. Verify all environment variables are set correctly
3. Ensure the server has sufficient permissions to access all required files
4. Confirm the Node.js version is compatible (v18+)

## Updating the Website

To update the website:

1. Pull the latest changes
2. Run the build process again
3. Transfer the updated files to the production server
4. Restart the application

```bash
# On the production server
pm2 restart forta-website
