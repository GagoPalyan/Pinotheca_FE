import { IPicture } from '@/types';
import { useTranslations } from 'next-intl';
import { getTranslations } from '../utils';

interface IProps {
  title: string;
  author: IPicture['author'];
  width: string;
  height: string;
  material: string;
  paint: string;
}

function CardInfo({ title, author, width, height, material, paint }: IProps) {
  const t = useTranslations('gallery');
  const translation = getTranslations(t, material, paint);

  return (
    <div className="flex flex-col text-gray-950">
      <h2 className="big-semibold truncate">{title}</h2>
      <h3 className="text-normal">
        {author.firstname} {author.lastname}
      </h3>
      <div className="flex items-center justify-between">
        <span className="small-normal capitalize">{t('card.info', translation)}</span>
        <span className="small-normal">
          {width} x {height} {t('card.cm')}
        </span>
      </div>
    </div>
  );
}

export default CardInfo;
