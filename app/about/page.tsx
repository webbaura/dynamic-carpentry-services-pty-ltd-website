import type { Metadata } from 'next';
import { Animate } from '@/components/ui/Animate';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { content } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${content.business.name} — Melbourne carpenters specialising in lockup, cladding, fixing, EzyJamb and shadow line door installations.`,
};

export default function About() {
  const { headline, content: body, values } = content.pages.about;

  return (
    <>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate variant="fade-up">
            <SectionLabel>About Us</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
            >
              {headline}
            </h1>
          </Animate>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Animate variant="slide-left">
              <div>
                {body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base lg:text-lg leading-relaxed text-white/50 mb-6 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </Animate>
            <Animate variant="slide-right">
              <div
                className="rounded-xl p-8"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  style={{ color: 'var(--color-accent)' }}
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                >
                  Our Philosophy
                </p>
                <blockquote className="text-xl lg:text-2xl font-bold leading-snug text-white/80 italic">
                  &ldquo;{content.philosophy}&rdquo;
                </blockquote>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {(values?.length ?? 0) > 0 && (
        <section style={{ backgroundColor: 'var(--color-surface)' }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <Animate variant="fade-up">
              <SectionLabel>What We Value</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-16 max-w-xl"
                style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
              >
                The principles we build by
              </h2>
            </Animate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(values ?? []).map((v, i) => (
                <Animate key={i} variant="fade-up" delay={i * 0.1}>
                  <div className="group">
                    <div
                      className="text-4xl font-bold mb-6 opacity-25 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-barlow, system-ui)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3
                      className="text-white font-bold text-xl mb-3"
                      style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/45">{v.body}</p>
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
