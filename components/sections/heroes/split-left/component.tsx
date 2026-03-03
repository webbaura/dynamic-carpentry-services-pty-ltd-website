'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';
import type { BrandConfig } from '@/lib/brand';

interface Props {
  content: SiteContent;
  brand: BrandConfig;
}

export default function HeroSplit({ content, brand }: Props) {
  const hero = content.pages.home.hero;
  const stats = content.pages.home.stats;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">

      {/* Decorative right-side accent shape */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, var(--color-accent), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Vertical accent line — left edge detail */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px opacity-30"
        style={{ background: `linear-gradient(to bottom, transparent, var(--color-accent), transparent)` }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            {/* Industry label */}
            <Animate variant="fade-up" delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-8 h-0.5"
                  style={{ background: `var(--color-accent)` }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: `var(--color-accent)` }}
                >
                  {content.business.industry || brand.tagline}
                </span>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {hero.headline}
              </h1>
            </Animate>

            <Animate variant="fade-up" delay={0.2}>
              <p className="text-lg leading-relaxed text-white/60 mb-10 max-w-lg">
                {hero.value_prop || hero.subheadline}
              </p>
            </Animate>

            <Animate variant="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: `var(--color-accent)`,
                    color: '#fff',
                    boxShadow: `0 0 0 0 var(--color-accent)`,
                  }}
                >
                  {hero.cta_primary || 'Get started'}
                </Link>
                {hero.cta_secondary && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border text-white/70 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    {hero.cta_secondary}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </Animate>

            {/* Trust line */}
            {hero.trust_line && (
              <Animate variant="fade-up" delay={0.4}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {[0,1,2,3].map(i => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-background"
                        style={{ background: `hsl(${200 + i * 30}, 60%, 50%)` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/50">{hero.trust_line}</p>
                </div>
              </Animate>
            )}
          </div>

          {/* Right — visual block */}
          <Animate variant="slide-right" delay={0.2}>
            <div className="relative">
              {/* Main visual card */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface, #1a1a2e) 0%, rgba(255,255,255,0.03) 100%)`,
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Decorative content — replaced with real image in production */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div
                      className="text-6xl font-bold tracking-tight mb-2"
                      style={{ color: `var(--color-accent)`, fontFamily: 'var(--font-heading)' }}
                    >
                      {content.business.name?.split(' ')[0] || '✦'}
                    </div>
                    <div className="text-white/30 text-sm">Replace with hero image</div>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stat card */}
              {stats && stats[0] && (
                <div
                  className="absolute -bottom-5 -left-5 rounded-xl px-5 py-4"
                  style={{
                    background: `var(--color-accent)`,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="text-2xl font-bold text-white">{stats[0].value}</div>
                  <div className="text-xs text-white/80 mt-0.5">{stats[0].label}</div>
                </div>
              )}

              {/* Decorative dot grid */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(var(--color-accent) 1px, transparent 1px)`,
                  backgroundSize: '8px 8px',
                }}
                aria-hidden="true"
              />
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
