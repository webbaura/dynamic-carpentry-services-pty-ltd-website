import { content } from '@/lib/content';

export default function JsonLd() {
  const biz = content.business;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': `${content.seo?.siteUrl || ''}/#organization`,
        name: biz.name,
        description: biz.description,
        url: content.seo?.siteUrl || '',
        logo: { '@type': 'ImageObject', url: `${content.seo?.siteUrl || ''}/logo.png` },
        address: biz.address ? {
          '@type': 'PostalAddress',
          addressLocality: biz.address.city || '',
          addressRegion:   biz.address.state || 'VIC',
          addressCountry:  biz.address.country || 'AU',
        } : undefined,
        telephone: biz.phone || undefined,
        email:     content.pages.contact.email || undefined,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4',
          reviewCount: '8',
          bestRating: '5',
        },
        areaServed: {
          '@type': 'City',
          name: 'Melbourne',
        },
        priceRange: '$$',
        sameAs: content.social ? Object.values(content.social).filter(Boolean) : [],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Carpentry Services',
          itemListElement: (content.pages.services.items ?? []).map((s, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: s.title,
            description: s.description,
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${content.seo?.siteUrl || ''}/#website`,
        url: content.seo?.siteUrl || '',
        name: biz.name,
        publisher: { '@id': `${content.seo?.siteUrl || ''}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
