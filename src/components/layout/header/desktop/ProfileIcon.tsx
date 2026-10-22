import { PageUrls } from '@/types/path.types';
import UserIcon from '#/icons/user.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface IProfileIcon {
  letter?: string;
  imageUrl: string | null;
}

function ProfileIcon({ letter, imageUrl }: IProfileIcon) {
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
      className="size-7 rounded-full flex items-center justify-center overflow-hidden bg-primary-100"
    >
      {imageUrl ? (
        <Image width={28} height={28} alt="User Image" src={imageUrl} />
      ) : (
        <span className="text-primary-400 text-semibold">{letter}</span>
      )}
    </Link>
  );
}

export default ProfileIcon;
