'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';
import type { BrandConfig } from '@/lib/brand';

interface Props {
  content: SiteContent;
  brand: BrandConfig;
}

export default function HeroCentered({ content, brand }: Props) {
  const hero = content.pages.home.hero;
  const stats = content.pages.home.stats;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: `var(--color-accent)` }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">

        {/* Label */}
        {brand.tagline && (
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="h-px w-8"
              style={{ background: `var(--color-accent)` }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: `var(--color-accent)` }}
            >
              {brand.tagline}
            </span>
            <span
              className="h-px w-8"
              style={{ background: `var(--color-accent)` }}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-white/60">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            style={{
              background: `var(--color-accent)`,
              color: '#fff',
            }}
          >
            {hero.cta_primary || 'Get in touch'}
          </Link>
          {hero.cta_secondary && (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border transition-all duration-200 hover:-translate-y-0.5 text-white/80 hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              {hero.cta_secondary}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {/* Stats bar */}
        {stats && stats.length > 0 && (
          <Animate variant="fade-up" delay={0.3}>
            <div
              className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {stats.map((stat: { value: string; label: string }, i: number) => (
                <div key={i} className="text-center">
                  <div
                    className="text-3xl font-bold tracking-tight text-white mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </Animate>
        )}
      </div>
    </section>
  );
}
