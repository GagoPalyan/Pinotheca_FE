'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useCartPicture } from '@/hooks/api/gallery';
import type { TErrorObject } from '@/types';

interface IBuyButton {
  id: string;
  isInCart: boolean;
  isSold: boolean;
}

function BuyButton({ id, isInCart, isSold }: IBuyButton) {
  const t = useTranslations('picture');
  const [inCart, setInCart] = useState(isInCart);
  const { mutateAsync: handleAddToCartPicture } = useCartPicture();

  const handleBuy = async () => {
    try {
      const { isInCart: next } = await handleAddToCartPicture(id);
      setInCart(next);
    } catch (error) {
      toast.error((error as TErrorObject).message);
    }
  };

  return (
    <Button
      variant="primary"
      size="small"
      customClass="w-fit min-w-[210px] px-4 py-1.5"
      appendIcon="arrow-right"
      disabled={isSold}
      handleClick={handleBuy}
    >
      {isSold ? t('sold') : inCart ? t('inCart') : t('buy')}
    </Button>
  );
}

export default BuyButton;
