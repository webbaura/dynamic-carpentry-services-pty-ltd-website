'use client';

import Image from 'next/image';
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

export default function GalleryMasonry({ content }: Props) {
  const gallery = (content as any).gallery;
  if (!gallery?.images?.length) return null;

  const images: GalleryImage[] = gallery.images;

  const col1 = images.filter((_: GalleryImage, i: number) => i % 3 === 0);
  const col2 = images.filter((_: GalleryImage, i: number) => i % 3 === 1);
  const col3 = images.filter((_: GalleryImage, i: number) => i % 3 === 2);

  return (
    <section className="py-24" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Animate variant="fade-up">
          <div className="mb-14 max-w-xl">
            {gallery.label && (
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
                {gallery.label}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              {gallery.heading || 'Our Work'}
            </h2>
            {gallery.subheading && (
              <p className="mt-3 text-white/55 text-base leading-relaxed">{gallery.subheading}</p>
            )}
          </div>
        </Animate>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 sm:gap-4">
              {col.map((img: GalleryImage, i: number) => (
                <Animate key={i} variant="fade-up" delay={ci * 0.07 + i * 0.05}>
                  <div
                    className="group relative overflow-hidden rounded-xl"
                    style={{
                      aspectRatio: i % 2 === 0 ? '4/5' : '4/3',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}
                    >
                      {img.caption && (
                        <p className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { GalleryMasonry };
