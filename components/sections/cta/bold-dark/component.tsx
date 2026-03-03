'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; }

export default function CtaBoldDark({ content }: Props) {
  const cta = content.pages.home.cta;

  return (
    <section className="relative py-28 overflow-hidden bg-background">

      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, var(--color-accent), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, var(--color-accent), transparent)` }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Animate variant="fade-up">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {cta?.heading || `Ready to get started?`}
          </h2>
        </Animate>

        {cta?.subheading && (
          <Animate variant="fade-up" delay={0.1}>
            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
              {cta.subheading}
            </p>
          </Animate>
        )}

        <Animate variant="fade-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{
                background: `var(--color-accent)`,
                boxShadow: `0 8px 32px color-mix(in srgb, var(--color-accent) 40%, transparent)`,
              }}
            >
              {cta?.cta_primary || 'Get in touch'}
            </Link>
            {cta?.cta_secondary && (
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl text-white/60 hover:text-white transition-colors duration-200"
              >
                {cta.cta_secondary} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </Animate>
      </div>
    </section>
  );
}
