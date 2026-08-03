'use client';

import Icon from '../../icon';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { TErrorObject } from '@/types';
import { useCartPicture, useLikePicture } from '@/hooks/api/gallery';

interface IProps {
  price: string;
  id: string;
  isLiked: boolean;
  isInCart: boolean;
}

function CardActions({ price, id, isLiked, isInCart }: IProps) {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [inCart, setInCart] = useState<boolean>(isInCart);

  const { mutateAsync: handleLikePicture } = useLikePicture();
  const { mutateAsync: handleAddToCartPicture } = useCartPicture();

  const handleLike = async () => {
    try {
      const { liked } = await handleLikePicture(id);
      setLiked(liked);
    } catch (error) {
      toast.error((error as TErrorObject).message);
    }
  };

  const handleAddToCart = async () => {
    try {
      const { isInCart } = await handleAddToCartPicture(id);
      setInCart(isInCart);
    } catch (error) {
      toast.error((error as TErrorObject).message);
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <span>${price}</span>
      <div className="flex items-center gap-2">
        <Icon
          name={liked ? 'favorites-filled' : 'favorites'}
          color="var(--color-primary-600)"
          handleClick={handleLike}
        />
        <Icon
          name={inCart ? 'cart-filled' : 'cart'}
          color="var(--color-primary-600)"
          handleClick={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default CardActions;
