import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/sections/JsonLd';
import { content } from '@/lib/content';
import { getCSSVariables } from '@/lib/brand';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: content.business.name,
    template: `%s | ${content.business.name}`,
  },
  description: content.business.description,
  keywords: content.seo?.keywords || [],
  authors: [{ name: content.business.name }],
  creator: content.business.name,
  metadataBase: new URL(content.seo?.siteUrl || 'https://example.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: content.seo?.siteUrl || '/',
    siteName: content.business.name,
    title: content.business.name,
    description: content.business.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.business.name,
    description: content.business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: content.seo?.siteUrl || '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: getCSSVariables() }} />
      </head>
      <body className="font-sans">
        <JsonLd />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
