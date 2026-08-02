import { LanguagesValueEnum } from '@/types/lang.types';
import getLanguage from '@/utils/helpers/getLanguage.utils';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useLang = () => {
  const locale = getLanguage();
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
