'use client';

import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useSharePicture } from '@/hooks/api/gallery';
import { SHARE_NETWORKS } from '../constants';
import type { TErrorObject } from '@/types';

interface IShare {
  id: string;
  title: string;
  imageUrl: string;
  sharesCount: number;
  onSharesCountChange: (count: number) => void;
}

function Share({ id, title, imageUrl, sharesCount, onSharesCountChange }: IShare) {
  const t = useTranslations('picture');
  const { mutateAsync: sharePicture } = useSharePicture();

  const handleShare = async (networkId: (typeof SHARE_NETWORKS)[number]['id']) => {
    const pageUrl = window.location.href;
    const network = SHARE_NETWORKS.find((item) => item.id === networkId);
    if (!network) return;

    const href =
      network.id === 'pinterest' ? network.href(pageUrl, imageUrl, title) : network.href(pageUrl);

    try {
      const { sharesCount: next } = await sharePicture(id);
      onSharesCountChange(next);
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch (error) {
      toast.error((error as TErrorObject).message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3.5">
      <div className="flex items-center gap-2">
        <p className="base-normal text-black leading-[21px]">{t('share')}</p>
        <span className="meta-semibold text-gray-600">{sharesCount}</span>
      </div>
      <div className="flex items-center gap-3">
        {SHARE_NETWORKS.map((network) => (
          <Button
            key={network.id}
            variant="ghost"
            size="small"
            customClass="w-fit p-0 size-6 min-w-6 bg-transparent hover:bg-transparent active:bg-transparent"
            handleClick={() => handleShare(network.id)}
          >
            <img src={`/icons/${network.icon}.svg`} alt={network.id} className="size-6" />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Share;
