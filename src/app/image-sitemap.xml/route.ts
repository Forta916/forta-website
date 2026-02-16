import { NextResponse } from 'next/server';

const BASE_URL = 'https://forta-usa.com';

interface ImageEntry {
  loc: string;
  images: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

const pagesWithImages: ImageEntry[] = [
  {
    loc: '/',
    images: [
      { loc: `${BASE_URL}/images/hero-image.avif`, title: 'Forta - Hörmann Dealer' },
    ],
  },
  {
    loc: '/products/garage-doors',
    images: [
      { loc: `${BASE_URL}/images/garage-doors/previews/berry-swing-doors-preview.avif`, title: 'Berry Swing Garage Doors' },
      { loc: `${BASE_URL}/images/garage-doors/previews/garagerollerdoorspreview.jpg`, title: 'Roller Garage Doors' },
      { loc: `${BASE_URL}/images/garage-doors/previews/sectionalgaragedoorspreview.avif`, title: 'Sectional Garage Doors' },
    ],
  },
  {
    loc: '/products/doors',
    images: [
      { loc: `${BASE_URL}/images/doors/previews/front-doors.avif`, title: 'Front Doors' },
      { loc: `${BASE_URL}/images/doors/previews/room-doors.avif`, title: 'Room Doors' },
    ],
  },
  {
    loc: '/products/storage-systems',
    images: [
      { loc: `${BASE_URL}/images/storage-systems/appliance-houses/appliance-houses/storage-space-systems-9.avif`, title: 'Appliance Houses' },
    ],
  },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pagesWithImages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
${page.images
  .map(
    (image) => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
    </image:image>`
  )
  .join('\n')}
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
