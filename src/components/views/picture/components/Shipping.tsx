'use client';

import { useTranslations } from 'next-intl';
import Icon from '@/components/shared/icon';

function Shipping() {
  const t = useTranslations('picture.shipping');

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-semibold text-black leading-[21px]">{t('title')}</h2>
      <div className="flex flex-col gap-1.5 max-w-[244px]">
        <p className="base-normal text-gray-500 leading-[21px]">{t('description')}</p>
        <div className="flex items-center gap-3">
          <Icon name="shipping" size={5} color="var(--color-gray-500)" />
          <span className="base-normal text-gray-500 leading-[21px]">{t('deliveryTitle')}</span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Icon name="secure-pack" size={5} color="var(--color-gray-500)" />
        <div className="flex flex-col gap-2 max-w-[327px]">
          <span className="base-normal font-medium text-gray-500 leading-[21px]">
            {t('packagingTitle')}
          </span>
          <span className="base-normal text-gray-600 leading-[21px]">{t('packagingText')}</span>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
