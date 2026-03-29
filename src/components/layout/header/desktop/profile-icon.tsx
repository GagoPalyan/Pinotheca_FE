import Icon from '@/components/shared/icon';
import { PageUrls } from '@/types/path.enums';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function ProfileIcon({ letter }: { letter?: string }) {
  const t = useTranslations('common.pages');

  if (!letter)
    return (
      <Link href={PageUrls.PROFILE} title={t('profile')}>
        <Icon name="user" color="black" size={6} />
      </Link>
    );

  return (
    <Link
      href={PageUrls.PROFILE}
      title={t('profile')}
      className="size-8 rounded-full flex items-center justify-center bg-primary-100"
    >
      <span className="text-primary-400 text-semibold">{letter}</span>
    </Link>
  );
}

export default ProfileIcon;
