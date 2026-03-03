import type { Metadata } from 'next';
import Animate from '@/components/ui/Animate';
import SectionLabel from '@/components/ui/SectionLabel';
import { content } from '@/lib/content';

export const metadata: Metadata = { title: 'About' };

export default function About() {
  const { headline, content: body, values } = content.pages.about;
  return (
    <>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate animation="fade-up">
            <SectionLabel>About Us</SectionLabel>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight max-w-3xl">{headline}</h1>
          </Animate>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Animate animation="slide-left">
              <div className="prose prose-lg max-w-none">
                {body.split('\n\n').map((para, i) => (
                  <p key={i} style={{ color: 'var(--color-muted)' }} className="text-lg leading-relaxed mb-6">{para}</p>
                ))}
              </div>
            </Animate>
            <Animate animation="slide-right">
              <div className="rounded-2xl p-8 border" style={{ backgroundColor: 'var(--color-white)', borderColor: 'var(--color-border)' }}>
                <p style={{ color: 'var(--color-accent)' }} className="text-xs font-bold uppercase tracking-widest mb-4">Our Philosophy</p>
                <blockquote style={{ color: 'var(--color-primary)' }} className="text-2xl font-bold leading-snug italic">
                  &ldquo;{content.philosophy}&rdquo;
                </blockquote>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {(values?.length ?? 0) > 0 && (
        <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <Animate animation="fade-up">
              <SectionLabel>What We Value</SectionLabel>
              <h2 className="text-4xl font-black text-white mb-16 max-w-xl">The Principles We Build By</h2>
            </Animate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(values ?? []).map((v, i) => (
                <Animate key={i} animation="fade-up" delay={i * 100}>
                  <div className="group">
                    <div style={{ color: 'var(--color-accent)' }} className="text-5xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">{v.title}</h3>
                    <p style={{ color: 'var(--color-muted)' }} className="text-sm leading-relaxed">{v.body}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
