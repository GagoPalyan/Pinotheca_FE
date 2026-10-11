import CardActions from './Actions';
import CardImage from './Image';
import type { IPicture } from '@/types/picture.types';
import CardInfo from './Info';
import Link from 'next/link';
import { PageUrls } from '@/types/path.types';

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
  const href = `${PageUrls.GALLERY}/${id}`;

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl shadow-sm bg-primary-50">
      <Link href={href} className="flex flex-col gap-2">
        <CardImage title={title} imageUrl={imageUrl} />
      </Link>
      <CardActions price={price} id={id} isLiked={isLiked} isInCart={isInCart} />
      <Link href={href}>
        <CardInfo
          title={title}
          author={author}
          width={width}
          height={height}
          material={material}
          paint={paint}
        />
      </Link>
    </div>
  );
}

export default Card;
