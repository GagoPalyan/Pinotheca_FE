'use client';

import Logo from '@/components/shared/logo';
import { headerDashboardPages, headerNavPages } from '@/constants/header';
import type { IHeaderData } from '@/types/auth.types';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HeaderUserPages from './user-pages';
import ProfileIcon from './profile-icon';

const LanguageSwitcher = dynamic(() => import('@/components/shared/language-switcher'), {
  ssr: false,
});

function DesktopHeader({ info }: { info: IHeaderData }) {
  const t = useTranslations('common.pages');

  return (
    <nav className="w-container py-6 flex justify-between items-center bg-neutral-50 max-md:hidden">
      <Logo />

      <ul className="flex gap-5 items-center">
        {headerNavPages.map(({ name, href }) => (
          <li key={href}>
            <Link href={href} className="text-gray-950">
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <LanguageSwitcher />
        {headerDashboardPages.map(({ keyName, name, ...props }) => (
          <HeaderUserPages key={name} {...props} name={t(name)} count={info?.[keyName] ?? 0} />
        ))}
        <ProfileIcon letter={info?.profile} />
      </div>
    </nav>
  );
}

export default DesktopHeader;
