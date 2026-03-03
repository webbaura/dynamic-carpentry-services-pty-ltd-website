'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';
import type { BrandConfig } from '@/lib/brand';

interface Props {
  content: SiteContent;
  brand: BrandConfig;
}

export default function HeroMinimal({ content, brand }: Props) {
  const hero = content.pages.home.hero;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-background">

      {/* Single accent line — top of section */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, var(--color-accent), transparent)` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-4xl">

          {/* Business category — typographic detail */}
          <Animate variant="fade-in" delay={0}>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-16 text-white/30"
            >
              {[content.business.industry, content.business.location]
                .filter(Boolean)
                .join(' · ')}
            </p>
          </Animate>

          {/* Headline — large, confident typography */}
          <Animate variant="fade-up" delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {hero.headline}
            </h1>
          </Animate>

          {/* Horizontal rule — editorial separator */}
          <Animate variant="fade-in" delay={0.2}>
            <div
              className="w-full h-px mb-10 opacity-15"
              style={{ background: 'white' }}
              aria-hidden="true"
            />
          </Animate>

          {/* Descriptor + CTA — same row on desktop */}
          <Animate variant="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg">
                {hero.descriptor || hero.subheadline}
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 flex-shrink-0 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200"
              >
                <span>{hero.cta_primary || 'View our work'}</span>
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 transition-all duration-200 group-hover:border-white/40 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </Animate>
        </div>

        {/* Bottom row — subtle meta info */}
        <div
          className="mt-24 pt-8 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-white/20 tracking-widest uppercase">
            {content.business.name}
          </p>
          <p className="text-xs text-white/20 tracking-widest uppercase">
            Est. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
