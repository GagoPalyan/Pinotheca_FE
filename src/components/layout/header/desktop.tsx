'use client';

import Icon from '@/components/shared/icon';
import Logo from '@/components/shared/logo';
import { headerDashboardPages, headerNavPages } from '@/constants/header';
import type { IHeaderData } from '@/types/auth.types';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ProfileIcon from './profile-icon';
import HeaderUserPages from './user-pages';

const LanguageSwitcher = dynamic(() => import('@/components/shared/language-switcher'), {
  ssr: false,
});

function DesktopHeader({ info }: { info: IHeaderData }) {
  const t = useTranslations('common.pages');

  return (
    <header className="w-container py-6 flex justify-between items-center bg-neutral-50 md:">
      <Logo />

      <nav>
        <ul className="flex gap-5 items-center">
          {headerNavPages.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} className="text-md-600 text-zinc-950">
                {t(name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <LanguageSwitcher />
        {headerDashboardPages.map(({ keyName, name, ...props }) => (
          <HeaderUserPages key={name} {...props} name={t(name)} count={info?.[keyName] ?? 0} />
        ))}
        <ProfileIcon letter={info?.profile}  />
      </div>
    </header>
  );
}

export default DesktopHeader;
