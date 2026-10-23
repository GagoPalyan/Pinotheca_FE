import { LanguagesValueEnum } from '@/types/lang.types';
import cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useLang = () => {
  const locale = useLocale() as LanguagesValueEnum;
  const router = useRouter();

  const handleLanguageChange = useCallback(
    (lang: LanguagesValueEnum) => {
      cookies.set('locale', lang);
      router.refresh();
    },
    [locale],
  );

  return { locale, handleLanguageChange };
};

export default useLang;
