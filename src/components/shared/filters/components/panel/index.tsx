'use client';

import { twMerge } from 'tailwind-merge';
import { useFiltersPanel } from '../../Context';
import FiltersPanelBackground from './Background';
import FiltersPanelContent from './Content';

function FiltersPanel() {
  const { isOpen } = useFiltersPanel();

  return (
    <div
      className={twMerge(
        'fixed top-0 right-0 z-800 h-dvh w-screen max-md:top-14 max-md:h-[calc(100dvh-56px)]',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filters-panel-title"
    >
      <FiltersPanelBackground />
      <FiltersPanelContent />
    </div>
  );
}

export default FiltersPanel;
