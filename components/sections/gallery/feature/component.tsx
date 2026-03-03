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

export default function GalleryFeature({ content }: Props) {
  const gallery = (content as any).gallery;
  if (!gallery?.images?.length) return null;

  const images: GalleryImage[] = gallery.images;
  const [feature, ...rest] = images;
  const grid = rest.slice(0, 4);

  return (
    <section className="py-24" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Animate variant="fade-up">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
            <div
              className="hidden sm:flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
            >
              <span style={{ color: 'var(--color-accent)' }}>●</span>
              {images.length} projects
            </div>
          </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">

          {/* Feature image — 3 cols */}
          <Animate variant="fade-up" className="lg:col-span-3">
            <div
              className="group relative overflow-hidden rounded-2xl"
              style={{
                minHeight: 'clamp(280px, 45vw, 560px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, transparent 50%, rgba(0,0,0,0.6) 100%)' }}
              />
              {feature.caption && (
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
                  >
                    {feature.caption}
                  </p>
                </div>
              )}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
              >
                Featured
              </div>
            </div>
          </Animate>

          {/* Side grid — 2 cols, 2×2 */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 content-start">
            {grid.map((img: GalleryImage, i: number) => (
              <Animate key={i} variant="fade-up" delay={0.05 + i * 0.05}>
                <div
                  className="group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: '1/1', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                  />
                  {img.caption && (
                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {img.caption}
                    </p>
                  )}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { GalleryFeature };
