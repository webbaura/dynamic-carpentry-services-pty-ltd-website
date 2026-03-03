'use client';

import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; }

export default function ServicesAlternating({ content }: Props) {
  const section = content.pages.home.services_section;
  const services = content.services || [];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-20">
          <Animate variant="fade-up">
            <SectionLabel>{section?.label || 'OUR APPROACH'}</SectionLabel>
          </Animate>
          <Animate variant="fade-up" delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-4 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {section?.heading || 'How we work'}
            </h2>
          </Animate>
        </div>

        {/* Alternating feature rows */}
        <div className="space-y-0">
          {services.map((service: { title: string; description: string; detail?: string }, i: number) => (
            <Animate key={i} variant="fade-up" delay={i * 0.1}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 items-start"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span
                    className="text-sm font-mono text-white/20"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3
                    className="text-xl font-semibold text-white leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-base text-white/55 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Detail / outcome */}
                {service.detail && (
                  <div className="lg:col-span-2 text-right">
                    <span
                      className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full"
                      style={{
                        color: `var(--color-accent)`,
                        background: `color-mix(in srgb, var(--color-accent) 10%, transparent)`,
                      }}
                    >
                      {service.detail}
                    </span>
                  </div>
                )}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
