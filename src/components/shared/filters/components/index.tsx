'use client';

import FiltersTrigger from './FiltersTrigger';
import SortDropdown from './SortDropdown';
import ActiveFilters from './ActiveFilters';
import { FiltersPanelProvider } from '../Context';
import useFilters from '@/hooks/useFilters';
import { getActiveFiltersCount } from '../utils';

interface IFilters {
  minPrice: number;
  maxPrice: number;
}

function Filters({ minPrice, maxPrice }: IFilters) {
  const { values } = useFilters();
  const activeCount = getActiveFiltersCount(values);

  return (
    <FiltersPanelProvider minPrice={minPrice} maxPrice={maxPrice}>
      <div className="w-container mb-5 flex flex-col gap-3">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3">
          <FiltersTrigger count={activeCount} />
          <div className="justify-self-end">
            <SortDropdown />
          </div>
        </div>

        {activeCount > 0 && <ActiveFilters />}
      </div>
    </FiltersPanelProvider>
  );
}

export default Filters;
