import { NextResponse } from 'next/server';

const BASE_URL = 'https://forta-usa.com';

interface ProductEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

const products: ProductEntry[] = [
  // Garage Doors
  { loc: '/products/garage-doors/sectional', priority: 0.8 },
  { loc: '/products/garage-doors/roller', priority: 0.8 },
  { loc: '/products/garage-doors/side-sectional', priority: 0.7 },
  { loc: '/products/garage-doors/hinged', priority: 0.7 },
  { loc: '/products/garage-doors/berry-swing', priority: 0.8 },
  { loc: '/products/garage-doors/aluminum-frame', priority: 0.7 },
  { loc: '/products/garage-doors/side-doors', priority: 0.7 },
  // Doors
  { loc: '/products/doors/front-doors', priority: 0.8 },
  { loc: '/products/doors/room-doors', priority: 0.7 },
  { loc: '/products/doors/loft-doors', priority: 0.7 },
  { loc: '/products/doors/functional-doors', priority: 0.7 },
  // Storage Systems
  { loc: '/products/storage-systems/appliance-houses', priority: 0.8 },
  { loc: '/products/storage-systems/firewood-shelves', priority: 0.7 },
  { loc: '/products/storage-systems/garden-boxes', priority: 0.7 },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${products
  .map(
    (product) => `  <url>
    <loc>${BASE_URL}${product.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${product.changefreq || 'monthly'}</changefreq>
    <priority>${product.priority || 0.5}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
