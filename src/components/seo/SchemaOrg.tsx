'use client';

interface SchemaOrgProps {
  type?: 'AIAssistant' | 'Organization';
}

export default function SchemaOrg({ type = 'AIAssistant' }: SchemaOrgProps) {
  const schema =
    type === 'AIAssistant'
      ? {
          '@context': 'https://schema.org',
          '@type': 'AIAssistant',
          name: 'Forta AI Assistant',
          description:
            'AI assistant for Hörmann product inquiries. Get expert advice on garage doors, entrance doors, room doors, and storage systems.',
          provider: {
            '@type': 'Organization',
            name: 'Forta',
            url: 'https://forta-usa.com',
            logo: 'https://forta-usa.com/images/hero-image.avif',
            description:
              'Official Hörmann dealer in California, offering premium garage doors, doors, and storage systems since 2008.',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'State',
              name: 'California',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-123-4567',
              contactType: 'customer service',
              availableLanguage: 'English',
            },
          },
          serviceType: 'Product Information',
          topic: 'Hörmann garage doors, entrance doors, room doors, storage systems',
          operatingSystem: 'Web-based',
          url: 'https://forta-usa.com',
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Forta',
          url: 'https://forta-usa.com',
          logo: 'https://forta-usa.com/images/hero-image.avif',
          description:
            'Official Hörmann dealer in California, offering premium garage doors, doors, and storage systems since 2008.',
          foundingDate: '2008',
          areaServed: {
            '@type': 'State',
            name: 'California',
          },
          serviceType: 'Retail',
          priceRange: '$$$',
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
