'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useFiltersPanel } from '../Context';
import FiltersPanel from './panel';

interface IFiltersTrigger {
  count: number;
}

function FiltersTrigger({ count }: IFiltersTrigger) {
  const t = useTranslations();
  const { toggle } = useFiltersPanel();
  const label = count > 0 ? `${t('gallery.filters.title')}(${count})` : t('gallery.filters.title');

  return (
    <>
      <div data-filters-toggle>
        <Button
          variant="secondary"
          size="small"
          customClass="w-fit shrink-0"
          prependIcon="filter"
          handleClick={toggle}
        >
          {label}
        </Button>
      </div>
      <FiltersPanel />
    </>
  );
}

export default FiltersTrigger;
