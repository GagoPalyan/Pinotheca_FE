'use client';

import FiltersTrigger from './FiltersTrigger';
import SortDropdown from './SortDropdown';
import ActiveFilters from './ActiveFilters';
import { FiltersPanelProvider } from '../Context';
import useFilters from '@/hooks/useFilters';
import { getActiveFiltersCount } from '../utils';
import type { TFiltersMeta } from '@/components/views/gallery';

interface IFilters {
  filters: TFiltersMeta;
}

function Filters({ filters }: IFilters) {
  const { values } = useFilters();
  const activeCount = getActiveFiltersCount(values);

  return (
    <FiltersPanelProvider filters={filters}>
      <div className="w-container mb-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <FiltersTrigger count={activeCount} />
          <SortDropdown />
        </div>

        {activeCount > 0 && <ActiveFilters />}
      </div>
    </FiltersPanelProvider>
  );
}

export default Filters;
