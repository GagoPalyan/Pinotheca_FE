import { LanguagesValueEnum } from '@/types/lang.enums';
import getLanguage from '@/utils/helpers/getLanguage.utils';
import cookies from 'js-cookie';
import { useCallback, useMemo } from 'react';

const useLang = () => {
  const locale = useMemo(() => getLanguage(), []);

  const handleLanguageChange = useCallback(
    async (lang: LanguagesValueEnum) => {
      cookies.set('locale', lang);
      window.location.reload();
    },
    [locale],
  );

  return {
    locale,
    handleLanguageChange,
  };
};

export default useLang;
