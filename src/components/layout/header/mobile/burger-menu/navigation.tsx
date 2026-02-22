'use client';

import Button from '@/components/ui/button';
import { burgerMenuPagesList } from '@/constants/header';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMobileMenu } from '../context';

function BurgerMenuNavigation() {
  const t = useTranslations('common.pages');
  const { info } = useMobileMenu();
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    close();
  };

  return (
    <nav className="flex flex-col gap-2">
      {burgerMenuPagesList.map(({ name, keyName, href }) => (
        <Button
          key={name}
          variant="secondary"
          customClass="justify-between"
          handleClick={() => handleClick(href)}
        >
          {t(name)}
          {keyName && Boolean(info?.[keyName]) && (
            <span className="bg-primary-300 text-white size-6 rounded-full">{info?.[keyName]}</span>
          )}
        </Button>
      ))}
    </nav>
  );
}

export default BurgerMenuNavigation;
