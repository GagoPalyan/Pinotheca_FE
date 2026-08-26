import CardActions from './Actions';
import CardImage from './Image';
import type { IPicture } from '@/types/picture.types';
import CardInfo from './Info';

function Card({
  id,
  imageUrl,
  title,
  price,
  isLiked,
  isInCart,
  author,
  width,
  height,
  material,
  paint,
}: IPicture) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl shadow-sm bg-primary-50">
      <CardImage title={title} imageUrl={imageUrl} />
      <CardActions price={price} id={id} isLiked={isLiked} isInCart={isInCart} />
      <CardInfo
        title={title}
        author={author}
        width={width}
        height={height}
        material={material}
        paint={paint}
      />
    </div>
  );
}

export default Card;
