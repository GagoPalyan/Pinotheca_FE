'use client';

import Dropdown from '@/components/ui/dropdown';
import type { TQueryParams } from '@/types/hooks.types';
import { PAGE_LIMITS } from '../constants';
import { useTranslations } from 'next-intl';

interface IProps {
  limit: number;
  set: (query: TQueryParams) => void;
}

function Limit({ limit, set }: IProps) {
  const t = useTranslations('common.pagination');

  const handleSelect = (value: number) => {
    set({ limit: String(value) });
  };

  const pageLimits = PAGE_LIMITS.map((value) => ({ label: t('page', { page: value }), value }));

  return (
    <Dropdown
      customClass="h-8 max-sm:h-10 px-2 bg-white rounded-sm border border-gray-400"
      dropdownPosition="top"
      labelValue="label"
      list={pageLimits}
      value={limit}
      onSelect={handleSelect}
    />
  );
}

export default Limit;
