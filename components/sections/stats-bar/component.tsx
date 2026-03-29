'use client';

import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface Props {
  content: SiteContent;
}

export default function StatsBar({ content }: Props) {
  const stats = content.pages.home.stats;
  if (!stats?.length) return null;

  return (
    <section
      className="relative py-8 border-y"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate variant="fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3"
                style={{
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : '0',
                }}
              >
                <div>
                  <p
                    className="text-2xl lg:text-3xl font-bold tracking-tight"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-barlow, system-ui)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5 uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}

export { StatsBar };
