import { PageUrls } from '@/types/path.types';
import UserIcon from '#/icons/user.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function ProfileIcon({ letter }: { letter?: string }) {
  const t = useTranslations('common.pages');

  if (!letter)
    return (
      <Link href={PageUrls.PROFILE} title={t('profile')}>
        <Image src={UserIcon} alt="User icon" width={28} height={28} />
      </Link>
    );

  return (
    <Link
      href={PageUrls.PROFILE}
      title={t('profile')}
      className="size-7 rounded-full flex items-center justify-center bg-primary-100"
    >
      <span className="text-primary-400 text-semibold">{letter}</span>
    </Link>
  );
}

export default ProfileIcon;
