'use client';

import Link from 'next/link';
import type { SiteContent } from '@/lib/content';
import type { BrandConfig } from '@/lib/brand';

interface Props {
  content: SiteContent;
  brand: BrandConfig;
}

export default function HeroFullscreen({ content, brand }: Props) {
  const hero = content.pages.home.hero;

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden bg-background">

      {/* Full-bleed gradient background — replaced with image in production */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg,
            var(--color-background) 0%,
            color-mix(in srgb, var(--color-accent) 15%, var(--color-background)) 50%,
            var(--color-background) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      {/* Large background text — editorial detail */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[25vw] font-black tracking-tighter opacity-[0.03] text-white leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {content.business.name?.split(' ')[0]?.toUpperCase() || '✦'}
        </span>
      </div>

      {/* Top-right accent element */}
      <div
        className="absolute top-12 right-12 w-24 h-24 rounded-full opacity-20 blur-2xl"
        style={{ background: `var(--color-accent)` }}
        aria-hidden="true"
      />

      {/* Content — anchored to bottom */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Category tag */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: `var(--color-accent)` }}
              aria-hidden="true"
            />
            <span className="text-xs font-medium tracking-widest uppercase text-white/40">
              {content.business.location || content.business.industry}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {hero.headline}
          </h1>

          {/* Divider line + tagline */}
          <div className="flex items-center gap-6 mb-10">
            <div
              className="h-px w-12 flex-shrink-0"
              style={{ background: `var(--color-accent)` }}
              aria-hidden="true"
            />
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              {hero.tagline || hero.subheadline}
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 group"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            {hero.cta_primary || 'Explore our work'}
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-200 group-hover:translate-x-1"
              style={{ background: `var(--color-accent)` }}
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs tracking-widest uppercase text-white rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30" aria-hidden="true" />
      </div>
    </section>
  );
}
