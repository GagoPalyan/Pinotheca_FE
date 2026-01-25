import Button from '@/components/ui/button/components';
import type { IAuthLayout } from '@/types/shared.types';
import { useTranslations } from 'next-intl';
import GoogleIcon from '@/../public/icons/google.svg';
import Image from 'next/image';

function AuthLayout({ title, text, hideLoginWithGoogle = true, children }: IAuthLayout) {
  const t = useTranslations();

  return (
    <div className="w-[286px] flex flex-col gap-7.5 items-center">
      <h1 className="h3-medium">{t(title ?? 'auth.common.welcome')}</h1>
      {Boolean(text) && <p className="base-medium text-gray-600">{text}</p>}
      {!hideLoginWithGoogle && (
        <>
          <Button variant="secondary" customClass="hover:bg-unset">
            <div className="flex items-center gap-2.5">
              <Image src={GoogleIcon} alt="google-icon" unoptimized />
              <span className="base-semibold">{t('auth.common.google-sign-in')}</span>
            </div>
          </Button>
          <span className="h3-medium">{t('auth.common.or')}</span>
        </>
      )}
      {children}
    </div>
  );
}

export default AuthLayout;
