'use client';

import { useTranslations } from 'next-intl';
import Multiselect from '@/components/ui/multiselect';
import type { TFilterOption } from '../../types';

interface IFilterGroup {
  title: string;
  options: TFilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
}

function FilterGroup({ title, options, selected, onToggle }: IFilterGroup) {
  const t = useTranslations();

  const list = options.map((option) => ({
    value: option.value,
    label: t(option.label),
  }));

  return (
    <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
      <h3 className="base-semibold text-gray-950">{t(title)}</h3>
      <Multiselect
        value={selected}
        list={list}
        onToggle={onToggle}
        placeholder={t(title)}
        customClass="border border-gray-400 rounded-sm h-11 px-3"
        chevronColor="var(--color-primary-600)"
      />
    </div>
  );
}

export default FilterGroup;
