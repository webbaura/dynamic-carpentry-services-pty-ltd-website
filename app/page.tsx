import { getContent } from '@/lib/content';
import { getBrand } from '@/lib/brand';

import HeroSplit     from '@/components/sections/heroes/split-left';
import StatsBar      from '@/components/sections/stats-bar';
import ServicesList  from '@/components/sections/services/numbered-list';
import AboutSplit    from '@/components/sections/about-split';
import GalleryMasonry from '@/components/sections/gallery/masonry';
import CtaBoldDark   from '@/components/sections/cta/bold-dark';

export default function Home() {
  const content = getContent();
  const brand   = getBrand();

  const hasGallery = !!(content.gallery?.images?.length);

  return (
    <main>
      <HeroSplit content={content} brand={brand} />
      <StatsBar content={content} />
      <ServicesList content={content} />
      <AboutSplit content={content} />
      {hasGallery && <GalleryMasonry content={content} />}
      <CtaBoldDark content={content} />
    </main>
  );
}
