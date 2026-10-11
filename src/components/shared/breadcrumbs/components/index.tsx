'use client';

import { usePathname } from 'next/navigation';
import { PageUrls } from '@/types/path.types';
import { useTranslations } from 'next-intl';
import BreadcrumbsLink from './link';

interface IBreadcrumbs {
  lastText?: string;
}

export default function Breadcrumbs({ lastText }: IBreadcrumbs) {
  const t = useTranslations('common.pages');
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="w-container pt-2 text-sm">
      <ol className="flex items-center flex-wrap">
        <li>
          <BreadcrumbsLink href={PageUrls.HOME} text={t('home')} />
        </li>

        {segments.map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center base-semibold text-primary-600">
              <span className="px-2">/</span>
              {isLast ? (
                <span>{lastText ?? t(segment)}</span>
              ) : (
                <BreadcrumbsLink href={path} text={t(segment)} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
