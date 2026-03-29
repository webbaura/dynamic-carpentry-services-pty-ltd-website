'use client';

import Link from 'next/link';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { SiteContent } from '@/lib/content';

interface AboutSection {
  label?: string;
  heading?: string;
  body?: string;
  cta_text?: string;
  cta_url?: string;
}

interface Props {
  content: SiteContent;
}

export default function AboutSplit({ content }: Props) {
  const section = (content.pages.home as Record<string, unknown>).about_section as AboutSection | undefined;
  if (!section) return null;

  const paragraphs = (section.body || '').split('\n\n');

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-28">
            <Animate variant="fade-up">
              <SectionLabel>{section.label || 'ABOUT'}</SectionLabel>
            </Animate>
            <Animate variant="fade-up" delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mt-4"
                style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
              >
                {section.heading}
              </h2>
            </Animate>
            {section.cta_text && section.cta_url && (
              <Animate variant="fade-up" delay={0.2}>
                <Link
                  href={section.cta_url}
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {section.cta_text}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Animate>
            )}
          </div>

          {/* Right — body text */}
          <div>
            {paragraphs.map((para, i) => (
              <Animate key={i} variant="fade-up" delay={i * 0.1}>
                <p className="text-base lg:text-lg leading-relaxed text-white/55 mb-6 last:mb-0">
                  {para}
                </p>
              </Animate>
            ))}

            {/* Trust micro-signal */}
            <Animate variant="fade-up" delay={paragraphs.length * 0.1}>
              <div
                className="mt-8 pt-8 flex flex-wrap gap-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-barlow, system-ui)' }}
                  >
                    4&#9733;
                  </p>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Google Rating</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-barlow, system-ui)' }}
                  >
                    Res + Com
                  </p>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Projects</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-barlow, system-ui)' }}
                  >
                    Melbourne
                  </p>
                  <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">Metro-wide</p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSplit };
