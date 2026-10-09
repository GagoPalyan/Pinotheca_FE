'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from '@/components/ui/image';
import Button from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { getImageUrl } from '@/components/ui/image';
import type { IPicture } from '@/types/picture.types';
import MediaStats from './MediaStats';

const ZoomModal = dynamic(() => import('./ZoomModal'), { ssr: false });

interface IMedia {
  id: string;
  imageUrl: string;
  title: string;
  likesCount: number;
  sharesCount: number;
  relatedPictures: IPicture[];
}

function Media({ id, imageUrl, title, likesCount, sharesCount }: IMedia) {
  const t = useTranslations('picture');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full max-w-xl flex flex-col gap-3.5">
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          customClass="object-contain"
        />
        <MediaStats likesCount={likesCount} sharesCount={sharesCount} />
      </div>
      <div className="w-full max-w-xl flex items-center gap-2 flex-wrap">
        <Button
          variant="ghost"
          size="small"
          customClass="w-fit"
          prependIcon="zoom"
          handleClick={() => setIsZoomOpen(true)}
        >
          {t('zoom')}
        </Button>
        <Button
          variant="ghost"
          size="small"
          customClass="w-fit"
          prependIcon="window"
          handleClick={() => window.open(getImageUrl(imageUrl), '_blank', 'noopener,noreferrer')}
        >
          {t('viewFullSize')}
        </Button>
      </div>
      <ZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        imageUrl={imageUrl}
        title={title}
      />
    </div>
  );
}

export default Media;
