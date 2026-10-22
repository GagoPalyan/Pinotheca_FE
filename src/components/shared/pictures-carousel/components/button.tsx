import Button from '@/components/ui/button';
import React from 'react';
import { ScrollSide } from '../types';
import { twMerge } from 'tailwind-merge';

interface IPicturesCarouselButton {
  side: ScrollSide;
  show: boolean;
  scroll: (side: ScrollSide) => void;
}

function PicturesCarouselButton({ side, show, scroll }: IPicturesCarouselButton) {
  if (!show) return null;

  return (
    <Button
      variant="tertiary"
      size="small"
      customClass={twMerge(
        'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 min-w-10 rounded-full bg-gray-25/60 shadow-sm p-0 hidden md:flex',
        side === ScrollSide.LEFT ? 'left-0' : 'right-0',
      )}
      prependIcon={side}
      handleClick={() => scroll(side)}
    />
  );
}

export default PicturesCarouselButton;
