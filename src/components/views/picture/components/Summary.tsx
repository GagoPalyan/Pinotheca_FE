'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import Icon from '@/components/shared/icon';
import { useLikePicture } from '@/hooks/api/gallery';
import type { TErrorObject } from '@/types';
import type { IPictureDetail } from '../types';

interface ISummary {
  picture: IPictureDetail;
  likesCount: number;
  onLikesCountChange: (count: number) => void;
}

function Summary({ picture, likesCount, onLikesCountChange }: ISummary) {
  const t = useTranslations();
  const [liked, setLiked] = useState(picture.isLiked);
  const { mutateAsync: handleLikePicture } = useLikePicture();

  const medium = {
    material: t(`gallery.picture.material.${picture.material}`),
    paint: t(`gallery.picture.paint.${picture.paint}`),
  };

  const handleLike = async () => {
    try {
      const { liked: nextLiked } = await handleLikePicture(picture.id);
      setLiked(nextLiked);
      onLikesCountChange(nextLiked ? likesCount + 1 : Math.max(0, likesCount - 1));
    } catch (error) {
      toast.error((error as TErrorObject).message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-end gap-1">
          <h1 className="h4-bold text-black flex-1">{picture.title}</h1>
          <div className="flex items-center gap-1.5 shrink-0 pb-0.5">
            <Icon
              name={liked ? 'favorites-filled' : 'favorites'}
              size={6}
              color="var(--color-primary-600)"
              handleClick={handleLike}
            />
          </div>
        </div>
        <p className="text-semibold text-black">
          {picture.author.firstname} {picture.author.lastname}
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1 meta-semibold capitalize">
          <span className="text-black">{t('picture.medium')}:</span>
          <span className="text-gray-950">{t('gallery.card.info', medium)}</span>
        </div>
        <div className="flex items-center gap-1 meta-semibold">
          <span className="text-black">{t('picture.size')}:</span>
          <span className="text-gray-950">
            {picture.width}×{picture.height}
            {t('gallery.card.cm')}
          </span>
        </div>
        <div className="flex items-center gap-1 meta-semibold text-black">
          <span>{t('picture.year')}:</span>
          <span>{picture.year}</span>
        </div>
        <p className="h4-bold text-black flex items-center gap-2">
          <span>$</span>
          <span>{picture.price}</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
