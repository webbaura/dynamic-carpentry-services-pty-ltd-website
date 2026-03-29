'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';
import type { BrandConfig } from '@/lib/brand';

interface Props {
  content: SiteContent;
  brand: BrandConfig;
}

export default function HeroSplit({ content, brand }: Props) {
  const hero = content.pages.home.hero;
  const phone = content.business.phone || '';
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Subtle accent glow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, var(--color-accent), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <Animate variant="fade-up" delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-0.5"
                  style={{ background: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {content.business.industry || 'Carpentry'}
                </span>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.1}>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6"
                style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
              >
                {hero.headline?.split('\n').map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
            </Animate>

            <Animate variant="fade-up" delay={0.2}>
              <p className="text-lg leading-relaxed text-white/50 mb-10 max-w-lg">
                {hero.subheadline}
              </p>
            </Animate>

            {/* CTAs */}
            <Animate variant="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg uppercase tracking-wider"
                  style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                    boxShadow: '0 8px 24px color-mix(in srgb, var(--color-accent) 30%, transparent)',
                  }}
                >
                  {hero.cta_primary || 'Get a Free Quote'}
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold rounded-lg border text-white/80 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  <Phone size={16} strokeWidth={2.5} />
                  {phone}
                </a>
              </div>
            </Animate>

            {/* Trust line */}
            {hero.trust_line && (
              <Animate variant="fade-up" delay={0.4}>
                <p className="text-sm text-white/35">{hero.trust_line}</p>
              </Animate>
            )}
          </div>

          {/* Right — gallery preview grid */}
          <Animate variant="slide-right" delay={0.2}>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Image
                      src="/gallery/01.jpg"
                      alt="Lockup framing — residential build"
                      fill
                      className="object-cover"
                      sizes="25vw"
                      priority
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Image
                      src="/gallery/03.jpg"
                      alt="Fixing work — skirting and architraves"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Image
                      src="/gallery/02.jpg"
                      alt="Cladding installation — Melbourne home"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Image
                      src="/gallery/04.jpg"
                      alt="Commercial carpentry project"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative dot grid */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)',
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
