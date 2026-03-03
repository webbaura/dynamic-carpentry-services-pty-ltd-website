'use client';

import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface Props { content: SiteContent; }

export default function ServicesList({ content }: Props) {
  const section = content.pages.home.services_section;
  const services = content.services || [];

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left — sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Animate variant="fade-up">
                <SectionLabel>{section?.label || 'SERVICES'}</SectionLabel>
              </Animate>
              <Animate variant="fade-up" delay={0.1}>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-4 text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {section?.heading || 'What we offer'}
                </h2>
              </Animate>
            </div>
          </div>

          {/* Right — numbered list */}
          <div className="lg:col-span-8">
            {services.map((service: { title: string; description: string }, i: number) => (
              <Animate key={i} variant="fade-up" delay={i * 0.08}>
                <div
                  className="flex gap-8 py-8 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-sm font-mono text-white/20 mt-1 flex-shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)', color: 'inherit' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="flex-shrink-0 mt-1 text-white/20 group-hover:text-white/60 transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    →
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
