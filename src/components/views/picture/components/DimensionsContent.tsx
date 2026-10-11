'use client';

import { useTranslations } from 'next-intl';
import type { IPictureDetail } from '../types';

interface IDimensionsContent {
  picture: IPictureDetail;
}

function DimensionsContent({ picture }: IDimensionsContent) {
  const t = useTranslations('picture');
  const tGallery = useTranslations('gallery');

  return (
    <div className="w-full flex flex-col gap-2 base-normal text-black">
      <span>
        {t('dimensions.width')}: {picture.width} {tGallery('card.cm')}
      </span>
      <span>
        {t('dimensions.height')}: {picture.height} {tGallery('card.cm')}
      </span>
      <span className="capitalize">
        {t('dimensions.type')}: {tGallery(`picture.type.${picture.type}`)}
      </span>
    </div>
  );
}

export default DimensionsContent;
