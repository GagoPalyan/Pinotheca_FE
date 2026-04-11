import Image from 'next/image';

interface IProps {
  imageUrl: string;
  title: string;
}

function CardImage({ imageUrl, title }: IProps) {
  return imageUrl ? (
    <Image
      priority
      className="w-full aspect-square rounded-lg"
      src={imageUrl}
      alt={title}
      width={800}
      height={800}
    />
  ) : (
    <div className="w-full aspect-square rounded-lg bg-gray-200" />
  );
}

export default CardImage;
