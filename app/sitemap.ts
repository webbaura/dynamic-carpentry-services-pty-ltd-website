import { MetadataRoute } from 'next';
import { content } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = content.seo?.siteUrl || 'https://example.com';
  const now  = new Date();
  return [
    { url: base,              lastModified: now, changeFrequency: 'monthly', priority: 1   },
    { url: `${base}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ];
}
