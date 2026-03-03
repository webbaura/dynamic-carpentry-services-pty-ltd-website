'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Animate } from '@/components/ui/Animate';
import type { SiteContent } from '@/lib/content';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  content: SiteContent;
}

export default function GalleryScroll({ content }: Props) {
  const gallery = (content as any).gallery;
  const trackRef = useRef<HTMLDivElement>(null);

  if (!gallery?.images?.length) return null;

  const images: GalleryImage[] = gallery.images;

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-24 overflow-hidden" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Animate variant="fade-up">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div className="max-w-lg">
              {gallery.label && (
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
                  {gallery.label}
                </p>
              )}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {gallery.heading || 'Our Work'}
              </h2>
              {gallery.subheading && (
                <p className="mt-2 text-white/55 text-sm leading-relaxed">{gallery.subheading}</p>
              )}
            </div>
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              {(['left', 'right'] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  aria-label={`Scroll ${dir}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {dir === 'left'
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  }
                </button>
              ))}
            </div>
          </div>
        </Animate>
      </div>

      {/* Film strip */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pl-4 sm:pl-[max(24px,calc((100vw-1280px)/2+24px))] pr-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' } as React.CSSProperties}
      >
        {images.map((img: GalleryImage, i: number) => (
          <div
            key={i}
            className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
            style={{
              width: 'clamp(260px, 38vw, 480px)',
              height: 'clamp(320px, 48vw, 580px)',
              scrollSnapAlign: 'start',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 80vw, 38vw"
              priority={i < 2}
              className="object-cover transition-transform duration-700"
              style={{ transform: 'scale(1.01)' }}
              unoptimized
            />
            {img.caption && (
              <div
                className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)' }}
              >
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            )}
            <div
              className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'var(--color-accent)', color: '#fff' }}
            >
              {i + 1}
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-6" aria-hidden="true" />
      </div>
    </section>
  );
}

export { GalleryScroll };
