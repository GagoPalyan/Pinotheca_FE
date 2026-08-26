'use client';

import Logo from '@/components/shared/logo';
import { HEADER_DASHBOARD_PAGES, HEADER_NAV_PAGES } from '@/constants/header';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HeaderUserPages from './UserPages';
import ProfileIcon from './ProfileIcon';
import { IHeaderData } from '@/types';
import { useUserInfo } from '@/hooks/socket/useHeaderWs';

const LanguageSwitcher = dynamic(() => import('@/components/shared/language-switcher'), {
  ssr: false,
});

function DesktopHeader({ data }: { data: IHeaderData }) {
  const t = useTranslations('common.pages');

  return (
    <nav className="w-container py-6 flex justify-between items-center bg-neutral-50 max-md:hidden">
      <Logo />

      <ul className="flex gap-5 items-center">
        {HEADER_NAV_PAGES.map(({ name, href }) => (
          <li key={href}>
            <Link href={href} className="text-gray-950">
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <LanguageSwitcher />
        {HEADER_DASHBOARD_PAGES.map(({ keyName, name, ...props }) => (
          <HeaderUserPages key={name} {...props} name={t(name)} count={data[keyName]} />
        ))}
        <ProfileIcon letter={data.nameFirstLater} />
      </div>
    </nav>
  );
}

export default DesktopHeader;
