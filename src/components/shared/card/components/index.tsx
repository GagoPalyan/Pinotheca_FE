import CardActions from './actions';
import CardImage from './image';
import type { IPicture } from '@/types/picture.types';

function Card({ id, imageUrl, title, price, isLiked, isInCart }: IPicture) {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-xl shadow-sm bg-primary-50">
      <CardImage title={title} imageUrl={imageUrl} />
      <CardActions price={price} id={id} isLiked={isLiked} isInCart={isInCart} />
    </div>
  );
}

export default Card;
