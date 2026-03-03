'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; }

export default function CtaCenteredLight({ content }: Props) {
  const cta = content.pages.home.cta;

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: `color-mix(in srgb, var(--color-accent) 5%, white)` }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Animate variant="fade-up">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-8"
            style={{
              background: `color-mix(in srgb, var(--color-accent) 15%, transparent)`,
            }}
            aria-hidden="true"
          >
            <span style={{ color: `var(--color-accent)` }}>✦</span>
          </div>
        </Animate>

        <Animate variant="fade-up" delay={0.1}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {cta?.heading || 'Ready to work together?'}
          </h2>
        </Animate>

        {cta?.subheading && (
          <Animate variant="fade-up" delay={0.2}>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
              {cta.subheading}
            </p>
          </Animate>
        )}

        <Animate variant="fade-up" delay={0.3}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: `var(--color-accent)` }}
          >
            {cta?.cta_primary || 'Get in touch'}
          </Link>
        </Animate>
      </div>
    </section>
  );
}
