import Image from '@/components/ui/image';

interface IProps {
  imageUrl: string;
  title: string;
}

function CardImage({ imageUrl, title }: IProps) {
  return (
    <Image
      priority
      src={imageUrl}
      alt={title}
      width={800}
      height={800}
      customClass="aspect-square"
    />
  );
}

export default CardImage;
