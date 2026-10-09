'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/shared/card';
import Button from '@/components/ui/button';
import type { IPicture } from '@/types/picture.types';

interface IMoreFromArtist {
  pictures: IPicture[];
}

function MoreFromArtist({ pictures }: IMoreFromArtist) {
  const t = useTranslations('picture');
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (!pictures.length) return null;

  const scroll = (direction: 'left' | 'right') => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = direction === 'left' ? -384 : 384;
    node.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="w-container flex flex-col gap-6 py-14">
      <h2 className="h2-bold text-black">{t('moreFromArtist')}</h2>
      <div className="relative w-full">
        <Button
          variant="tertiary"
          size="small"
          customClass="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 min-w-10 rounded-full bg-gray-25 shadow-sm p-0 hidden md:flex"
          prependIcon="left"
          handleClick={() => scroll('left')}
        />
        <div
          ref={scrollerRef}
          className="w-full flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none]"
        >
          {pictures.map((picture) => (
            <div key={picture.id} className="min-w-[300px] max-w-[384px] flex-1">
              <Card {...picture} />
            </div>
          ))}
        </div>
        <Button
          variant="tertiary"
          size="small"
          customClass="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 min-w-10 rounded-full bg-gray-25 shadow-sm p-0 hidden md:flex"
          prependIcon="right"
          handleClick={() => scroll('right')}
        />
      </div>
    </section>
  );
}

export default MoreFromArtist;
