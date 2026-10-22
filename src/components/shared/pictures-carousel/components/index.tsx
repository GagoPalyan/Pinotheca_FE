'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/shared/card';
import type { IPicture } from '@/types/picture.types';
import useScroll from '../hooks/useScroll';
import PicturesCarouselButton from './button';
import { ScrollSide } from '../types';

interface IPicturesCarousel {
  pictures: IPicture[];
  title: string;
}

function PicturesCarousel({ pictures, title }: IPicturesCarousel) {
  const t = useTranslations();
  const { canScrollLeft, canScrollRight, scrollerRef, scroll } = useScroll();

  if (!pictures.length) return null;

  return (
    <section className="w-container flex flex-col gap-6 py-14">
      <h2 className="h2-bold text-black">{t(title)}</h2>
      {/* Here I need to add h3 and action button */}
      <div className="relative w-full">
        <PicturesCarouselButton side={ScrollSide.LEFT} show={canScrollLeft} scroll={scroll} />
        <div
          ref={scrollerRef}
          className="w-full flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none]"
        >
          {pictures.map((picture) => (
            <div key={picture.id} className="min-w-2xs max-w-sm flex-1">
              <Card {...picture} />
            </div>
          ))}
        </div>
        <PicturesCarouselButton side={ScrollSide.RIGHT} show={canScrollRight} scroll={scroll} />
      </div>
    </section>
  );
}

export default PicturesCarousel;
