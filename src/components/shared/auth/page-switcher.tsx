import Link from '@/components/ui/link/components';
import { useTranslations } from 'next-intl';

function PageSwitcher({ page }: { page: 'login' | 'register' }) {
  const t = useTranslations();

  return (
    <div className="px-2.5 w-full flex items-center justify-between mt-8">
      <p className="base-semibold text-gray-950">{t(`auth.pages.${page}.switch_page.title`)}</p>
      <Link text={t(`auth.pages.${page}.switch_page.button`)} to={`/${page}`} />
    </div>
  );
}

export default PageSwitcher;
