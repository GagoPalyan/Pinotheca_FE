'use client';

import Icon from '../../icon';

interface IProps {
  price: string;
  id: string;
}

function CardActions({ price, id }: IProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <span>${price}</span>
      <div className="flex items-center gap-2">
        <Icon name="favorites" color="var(--color-gray-950)" />
        <Icon name="cart" color="var(--color-gray-950)" />
      </div>
    </div>
  );
}

export default CardActions;
