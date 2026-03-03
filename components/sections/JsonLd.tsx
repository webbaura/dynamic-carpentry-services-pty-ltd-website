import { content } from '@/lib/content';

export default function JsonLd() {
  const biz = content.business;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'Organization'],
        '@id': `${content.seo?.siteUrl || ''}/#organization`,
        name: biz.name,
        description: biz.description,
        url: content.seo?.siteUrl || '',
        logo: { '@type': 'ImageObject', url: `${content.seo?.siteUrl || ''}/logo.png` },
        address: biz.address ? {
          '@type': 'PostalAddress',
          streetAddress:   biz.address.street  || '',
          addressLocality: biz.address.city    || '',
          addressRegion:   biz.address.state   || '',
          addressCountry:  biz.address.country || 'AU',
        } : undefined,
        telephone: biz.phone || undefined,
        email:     content.pages.contact.email || undefined,
        sameAs:    content.social ? Object.values(content.social).filter(Boolean) : [],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: (content.pages.services.items ?? []).map((s, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: s.title,
            description: s.description,
            price: s.price || undefined,
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
