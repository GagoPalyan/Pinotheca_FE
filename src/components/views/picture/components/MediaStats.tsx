import Icon from '@/components/shared/icon';
import { useTranslations } from 'next-intl';

interface IMediaStats {
  likesCount: number;
  sharesCount: number;
}

function MediaStats({ likesCount, sharesCount }: IMediaStats) {
  const t = useTranslations('picture');

  return (
    <div className="w-full max-w-[619px] flex items-center gap-5">
      <div className="flex items-center gap-1.5">
        <Icon name="favorites" size={5} color="var(--color-primary-600)" />
        <span className="meta-semibold text-gray-600">{likesCount}</span>
        <span className="meta-semibold text-gray-500">{t('likes')}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="meta-semibold text-gray-600">{sharesCount}</span>
        <span className="meta-semibold text-gray-500">{t('shares')}</span>
      </div>
    </div>
  );
}

export default MediaStats;
