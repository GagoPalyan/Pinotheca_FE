'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PageUrls } from '@/types/path.enums';
import { useTranslations } from 'next-intl';

interface IBreadcrumbs {
  lastText?: string;
}

export default function Breadcrumbs({ lastText }: IBreadcrumbs) {
  const t = useTranslations('common.pages');
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="w-container text-primary-500 text-sm absolute top-2">
      <ol className="flex items-center">
        <li>
          <Link href={PageUrls.HOME} className="hover:underline base-normal">
            {t('home')}
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="base-semibold">{lastText ?? t(segment)}</span>
              ) : (
                <Link href={path} className="hover:underline base-normal">
                  {t(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
