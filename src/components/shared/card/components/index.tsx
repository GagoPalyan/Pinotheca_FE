import CardActions from './actions';
import CardImage from './image';
import type { IPicture } from '@/types/picture.types';

function Card({ id, imageUrl, title, price }: IPicture) {
  return (
    <div className="flex flex-col gap-3 p-3 border border-gray-400 rounded-xl">
      <CardImage title={title} imageUrl={imageUrl} />
      <CardActions price={price} id={id} />
    </div>
  );
}

export default Card;
