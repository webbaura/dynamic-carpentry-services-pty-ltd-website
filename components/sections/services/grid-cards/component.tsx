'use client';

import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface ServiceItem { icon?: string; title: string; description: string; price?: string; }
interface Props { content: SiteContent; }

export default function ServicesGrid({ content }: Props) {
  const section  = content.pages?.home?.services_section;
  const services: ServiceItem[] = content.services || content.pages?.services?.items || [];

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <Animate variant="fade-up">
            <SectionLabel>{section?.label || 'WHAT WE DO'}</SectionLabel>
          </Animate>
          <Animate variant="fade-up" delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mt-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              {section?.heading || 'Our services'}
            </h2>
          </Animate>
          {section?.subheading && (
            <Animate variant="fade-up" delay={0.2}>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {section.subheading}
              </p>
            </Animate>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Animate key={i} variant="fade-up" delay={i * 0.08}>
              <div
                className="group relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="absolute top-0 left-6 w-8 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 text-lg"
                  style={{
                    background: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                    color: 'var(--color-accent)',
                  }}
                  aria-hidden="true"
                >
                  {service.icon || '✦'}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {service.description}
                </p>
                {service.price && (
                  <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {service.price}
                  </p>
                )}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
