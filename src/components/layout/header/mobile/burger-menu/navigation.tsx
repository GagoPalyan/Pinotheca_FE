'use client';

import Button from '@/components/ui/button';
import { BURGER_MENU_PAGES_LIST } from '@/constants/header';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useMobileMenu } from '../context';

function BurgerMenuNavigation() {
  const t = useTranslations('common.pages');
  const { data, close } = useMobileMenu();
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    close();
  };

  return (
    <nav className="flex flex-col gap-2">
      {BURGER_MENU_PAGES_LIST.map(({ name, keyName, href }) => (
        <Button
          key={name}
          variant="secondary"
          customClass="justify-between"
          handleClick={() => handleClick(href)}
        >
          {t(name)}
          {keyName && Boolean(data[keyName]) && (
            <span className="bg-primary-300 text-white size-6 rounded-full">{data[keyName]}</span>
          )}
        </Button>
      ))}
    </nav>
  );
}

export default BurgerMenuNavigation;
