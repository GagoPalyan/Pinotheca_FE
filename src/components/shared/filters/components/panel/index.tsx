'use client';

import { useFiltersPanel } from '../Context';
import FiltersPanelContent from './Content';
import Background from '@/components/shared/background';
import OverlayDialog from '@/components/shared/overlay-dialog';

function FiltersPanel() {
  const { isOpen } = useFiltersPanel();

  return (
    <OverlayDialog isOpen={isOpen} titleId="filters-panel-title" className="md:top-0 md:h-dvh">
      <Background isOpen={isOpen} />
      <FiltersPanelContent />
    </OverlayDialog>
  );
}

export default FiltersPanel;
