'use client';

import Dropdown from '@/components/ui/dropdown';
import { I18N_LANGUAGES } from '@/constants/languages';
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
      list={I18N_LANGUAGES}
      onSelect={handleLanguageChange}
      prependIcon="globe"
      labelValue="value"
      customClass="w-[80px] uppercase"
      dropdownPosition={dropdownPosition}
    />
  );
}

export default LanguageSwitcher;
