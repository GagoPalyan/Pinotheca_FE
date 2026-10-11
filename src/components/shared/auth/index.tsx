import Button from '@/components/ui/button';
import type { IAuthLayout } from '@/types/shared.types';
import { useTranslations } from 'next-intl';
import GoogleIcon from '@/../public/icons/google.svg';
import Image from 'next/image';

function AuthLayout({ title, text, hideLoginWithGoogle = false, children }: IAuthLayout) {
  const t = useTranslations('auth');

  return (
    <div className="w-[286px] flex flex-col gap-7.5 items-center">
      <h1 className="h3-bold text-center">{t(title ?? 'common.welcome')}</h1>
      {Boolean(text) && <p className="base-normal text-gray-600">{text}</p>}
      {!hideLoginWithGoogle && (
        <>
          <Button variant="secondary" customClass="hover:bg-unset">
            <div className="flex items-center gap-2.5">
              <Image src={GoogleIcon} alt="google-icon" unoptimized />
              <span className="base-semibold">{t('common.google-sign-in')}</span>
            </div>
          </Button>
          <span className="h3-bold">{t('common.or')}</span>
        </>
      )}
      {children}
    </div>
  );
}

export default AuthLayout;
