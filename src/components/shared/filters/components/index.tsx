'use client';

import FiltersTrigger from './FiltersTrigger';
import SortDropdown from './SortDropdown';

function Filters() {
  return (
    <div className="w-container flex justify-between items-center mb-5">
      <FiltersTrigger />
      <SortDropdown />
    </div>
  );
}

export default Filters;
