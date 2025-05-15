import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimized for production deployments
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable compression
  productionBrowserSourceMaps: false, // Disable source maps in production for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, // Allow SVG images
    contentDispositionType: 'attachment', // Helps with certain image types
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'forta-usa.com',
      },
    ],
  },
  // Add any environment variables that should be accessible to the browser
  env: {
    SITE_URL: 'https://forta-usa.com',
  },
};

export default nextConfig;
