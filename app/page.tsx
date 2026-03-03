import { getContent } from '@/lib/content';
import { getBrand } from '@/lib/brand';

// Hero variants — all imported statically for Next.js SSG tree-shaking
import HeroCentered  from '@/components/sections/heroes/centered';
import HeroSplit     from '@/components/sections/heroes/split-left';
import HeroFullscreen from '@/components/sections/heroes/fullscreen';
import HeroMinimal   from '@/components/sections/heroes/minimal-text';

// Services variants
import ServicesGrid        from '@/components/sections/services/grid-cards';
import ServicesAlternating from '@/components/sections/services/alternating-rows';
import ServicesList        from '@/components/sections/services/numbered-list';

// CTA variants
import CtaBoldDark      from '@/components/sections/cta/bold-dark';
import CtaCenteredLight from '@/components/sections/cta/centered-light';

// Gallery variants
import GalleryMasonry from '@/components/sections/gallery/masonry';
import GalleryScroll  from '@/components/sections/gallery/scroll';
import GalleryFeature from '@/components/sections/gallery/feature';

// Selector maps
const HERO_MAP = {
  centered:       HeroCentered,
  'split-left':   HeroSplit,
  fullscreen:     HeroFullscreen,
  'minimal-text': HeroMinimal,
} as const;

const SERVICES_MAP = {
  'grid-cards':       ServicesGrid,
  'alternating-rows': ServicesAlternating,
  'numbered-list':    ServicesList,
} as const;

const CTA_MAP = {
  'bold-dark':      CtaBoldDark,
  'centered-light': CtaCenteredLight,
} as const;

const GALLERY_MAP = {
  masonry: GalleryMasonry,
  scroll:  GalleryScroll,
  feature: GalleryFeature,
} as const;

export default function Home() {
  const content = getContent();
  const brand   = getBrand();

  const design = brand.design || {};

  const Hero     = HERO_MAP[design.hero_style as keyof typeof HERO_MAP]             ?? HeroCentered;
  const Services = SERVICES_MAP[design.services_style as keyof typeof SERVICES_MAP] ?? ServicesGrid;
  const Cta      = CTA_MAP[design.cta_style as keyof typeof CTA_MAP]               ?? CtaBoldDark;

  // Gallery: only render if content.gallery.images exists and has entries
  const galleryVariant = design.gallery_style as keyof typeof GALLERY_MAP;
  const Gallery = galleryVariant ? GALLERY_MAP[galleryVariant] : null;
  const hasGallery = !!(content as any).gallery?.images?.length;

  return (
    <main>
      <Hero content={content} brand={brand} />
      <Services content={content} />
      {hasGallery && Gallery && <Gallery content={content} />}
      <Cta content={content} />
    </main>
  );
}
