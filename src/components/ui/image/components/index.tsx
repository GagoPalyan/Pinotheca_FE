import { twMerge } from 'tailwind-merge';
import NextImage from 'next/image';
import { getImageUrl } from '../utils';

interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  customClass?: string;
}

function 
Image({ src, alt, width, height, priority = true, customClass }: IImage) {
  const imageUrl = getImageUrl(src);

  return (
    <NextImage
      className={twMerge('w-full aspect-square rounded-lg', customClass)}
      priority={priority}
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Image;
