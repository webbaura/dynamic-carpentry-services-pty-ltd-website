import { MetadataRoute } from 'next';
import { content } from '@/lib/content';

export default function robots(): MetadataRoute.Robots {
  const base = content.seo?.siteUrl || 'https://example.com';
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
