import Link from 'next/link';
import Image from '@/components/ui/image';
import { twMerge } from 'tailwind-merge';
import { PageUrls } from '@/types/path.types';

interface IMediaThumbnail {
  id: string;
  imageUrl: string;
  title: string;
  isActive: boolean;
  isCurrent: boolean;
  onSelect: () => void;
}

function MediaThumbnail({ id, imageUrl, title, isActive, isCurrent, onSelect }: IMediaThumbnail) {
  const className = twMerge(
    'block w-[130px] h-[120px] shrink-0 rounded-lg overflow-hidden border-2 transition-colors',
    isActive ? 'border-primary-500' : 'border-transparent hover:border-primary-200',
  );

  const image = (
    <Image
      src={imageUrl}
      alt={title}
      width={260}
      height={240}
      priority={false}
      customClass="w-full h-full aspect-auto rounded-lg object-cover"
    />
  );

  if (isCurrent) {
    return (
      <button type="button" className={className} onClick={onSelect} aria-label={title}>
        {image}
      </button>
    );
  }

  return (
    <Link href={`${PageUrls.GALLERY}/${id}`} className={className} aria-label={title}>
      {image}
    </Link>
  );
}

export default MediaThumbnail;
