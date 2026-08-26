'use client';

import Dropdown from '@/components/ui/dropdown';
import { SORT_LIST } from '../constants';
import { SortBy } from '../types';
import useFilters from '@/hooks/useFilters';

function SortDropdown() {
  const { sort, setQueryParams } = useFilters();

  const onSelect = (sort: SortBy) => {
    setQueryParams({ sort });
  };

  return (
    <Dropdown
      value={sort}
      onSelect={onSelect}
      list={SORT_LIST}
      customClass="w-20 text-primary-600"
      chevronColor="var(--color-primary-600)"
    />
  );
}

export default SortDropdown;
