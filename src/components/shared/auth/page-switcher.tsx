import Link from '@/components/ui/link/components';
import { PageUrls } from '@/types/path.types';
import { useTranslations } from 'next-intl';

interface IProps {
  page: 'login' | 'register' | 'forgot_password';
  link: PageUrls;
}

function PageSwitcher({ page, link }: IProps) {
  const t = useTranslations();

  return (
    <div className="px-2.5 w-full flex items-center justify-between mt-8">
      <p className="base-semibold text-gray-950">{t(`auth.pages.${page}.switch_page.title`)}</p>
      <Link text={t(`auth.pages.${page}.switch_page.button`)} to={link} />
    </div>
  );
}

export default PageSwitcher;
