'use client';

import Dropdown from '@/components/ui/dropdown';
import { i18nLanguages } from '@/constants/languages';
import useLang from '@/hooks/useLang';
import { LanguagesValueEnum } from '@/types/lang.enums';

function LanguageSwitcher() {
  const { handleLanguageChange, locale } = useLang();

  return (
    <Dropdown
      value={locale}
      list={i18nLanguages}
      onSelect={(value) => handleLanguageChange(value as LanguagesValueEnum)}
      prependIcon="globe"
      labelValue="value"
      customClass="w-[75px] uppercase"
    />
  );
}

export default LanguageSwitcher;
