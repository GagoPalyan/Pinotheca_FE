'use client';

import Button from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMobileMenu } from '../context';
import { PageUrls } from '@/types/path.types';
import { logoutClient } from '@/utils/api/api.utils';

function BurgerMenuAuth() {
  const t = useTranslations('common.pages');
  const { data, close } = useMobileMenu();
  const router = useRouter();

  const isSigned = Boolean(data.nameFirstLater);

  const handleClick = (href: string) => {
    router.push(href);
    close();
  };

  return (
    <Button
      variant="secondary"
      customClass="w-fit"
      handleClick={() => (isSigned ? logoutClient() : handleClick(PageUrls.LOGIN))}
    >
      {t(isSigned ? 'sign-out' : 'sign-in')}
    </Button>
  );
}

export default BurgerMenuAuth;
