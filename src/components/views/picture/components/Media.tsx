'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from '@/components/ui/image';
import Button from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { getImageUrl } from '@/components/ui/image';
import type { IPicture } from '@/types/picture.types';
import MediaStats from './MediaStats';
import MediaThumbnail from './MediaThumbnail';

const ZoomModal = dynamic(() => import('./ZoomModal'), { ssr: false });

interface IMedia {
  id: string;
  imageUrl: string;
  title: string;
  likesCount: number;
  sharesCount: number;
  relatedPictures: IPicture[];
}

function Media({ id, imageUrl, title, likesCount, sharesCount, relatedPictures }: IMedia) {
  const t = useTranslations('picture');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const thumbnails = [
    { id, imageUrl, title },
    ...relatedPictures.map((picture) => ({
      id: picture.id,
      imageUrl: picture.imageUrl,
      title: picture.title,
    })),
  ].slice(0, 4);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full max-w-[619px] flex flex-col gap-3.5">
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          priority
          customClass="w-full aspect-square rounded-lg object-cover"
        />
        <MediaStats likesCount={likesCount} sharesCount={sharesCount} />
        {thumbnails.length > 1 && (
          <div className="w-full flex gap-3.5 overflow-x-auto [scrollbar-width:none]">
            {thumbnails.map((thumbnail) => (
              <MediaThumbnail
                key={thumbnail.id}
                id={thumbnail.id}
                imageUrl={thumbnail.imageUrl}
                title={thumbnail.title}
                isActive={thumbnail.id === id}
                isCurrent={thumbnail.id === id}
                onSelect={() => undefined}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full max-w-[619px] flex items-center gap-2 flex-wrap">
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
