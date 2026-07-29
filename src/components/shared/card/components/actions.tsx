'use client';

import useLikePicture from '@/hooks/api/gallery/useLikePicture';
import Icon from '../../icon';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { TErrorObject } from '@/types';

interface IProps {
  price: string;
  id: string;
  isLiked: boolean;
}

function CardActions({ price, id, isLiked }: IProps) {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [inCart, setInCart] = useState<boolean>(true);

  const { mutateAsync: handleLikePicture } = useLikePicture();

  const handleLike = async () => {
    try {
      const { liked, message } = await handleLikePicture(id);
      toast.success(message);
      setLiked(liked);
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
        <Icon name={inCart ? 'cart-filled' : 'cart'} color="var(--color-primary-600)" />
      </div>
    </div>
  );
}

export default CardActions;
