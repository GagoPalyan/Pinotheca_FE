'use client';

import { useTranslations } from 'next-intl';
import useFilters from '@/hooks/useFilters';
import { EMPTY_FILTERS_FORM } from '../constants';
import { getActiveFilterChips } from '../utils';
import ActiveFilterChip from './ActiveFilterChip';
import Button from '@/components/ui/button';

function ActiveFilters() {
  const t = useTranslations();
  const { values, setQueryParams } = useFilters();
  const chips = getActiveFilterChips(values, t);

  if (chips.length === 0) return null;

  const clearAll = () => {
    setQueryParams({ ...EMPTY_FILTERS_FORM, page: '1' });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 small-semibold">
      <Button size="small" variant="secondary" customClass="w-fit" handleClick={clearAll}>
        {t('gallery.filters.clearAll')}
      </Button>

      {chips.map(({ id, label, patch }) => (
        <ActiveFilterChip
          key={id}
          label={label}
          onRemove={() => setQueryParams({ ...patch, page: '1' })}
        />
      ))}
    </div>
  );
}

export default ActiveFilters;
