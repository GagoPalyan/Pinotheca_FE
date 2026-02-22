'use client';

import Dropdown from '@/components/ui/dropdown';
import { i18nLanguages } from '@/constants/languages';
import useLang from '@/hooks/api/layout/useLang';

function LanguageSwitcher({
  dropdownPosition = 'bottom',
}: {
  dropdownPosition?: 'bottom' | 'top';
}) {
  const { handleLanguageChange, locale } = useLang();

  return (
    <Dropdown
      value={locale}
      list={i18nLanguages}
      onSelect={handleLanguageChange}
      prependIcon="globe"
      labelValue="value"
      customClass="w-[75px] uppercase"
      dropdownPosition={dropdownPosition}
    />
  );
}

export default LanguageSwitcher;
