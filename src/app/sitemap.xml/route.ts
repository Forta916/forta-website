import { NextResponse } from 'next/server';

const BASE_URL = 'https://forta-usa.com';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const staticPages: SitemapEntry[] = [
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/about', priority: 0.8, changefreq: 'monthly' },
  { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
  { loc: '/products', priority: 0.9, changefreq: 'weekly' },
  { loc: '/products/garage-doors', priority: 0.9, changefreq: 'weekly' },
  { loc: '/products/garage-doors/sectional', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/garage-doors/roller', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/garage-doors/side-sectional', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/ changefreq:garage-doors/hinged', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/garage-doors/berry-swing', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/garage-doors/aluminum-frame', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/garage-doors/side-doors', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/doors', priority: 0.9, changefreq: 'weekly' },
  { loc: '/products/doors/front-doors', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/doors/room-doors', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/doors/loft-doors', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/doors/functional-doors', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/storage-systems', priority: 0.9, changefreq: 'weekly' },
  { loc: '/products/storage-systems/appliance-houses', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/storage-systems/firewood-shelves', priority: 0.7, changefreq: 'monthly' },
  { loc: '/products/storage-systems/garden-boxes', priority: 0.7, changefreq: 'monthly' },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || 0.5}</priority>
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
