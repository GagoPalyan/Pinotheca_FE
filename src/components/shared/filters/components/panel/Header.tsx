'use client';

import { useTranslations } from 'next-intl';
import Icon from '@/components/shared/icon';
import { useFiltersPanel } from '../../Context';

function FiltersPanelHeader() {
  const t = useTranslations();
  const { close } = useFiltersPanel();

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 id="filters-panel-title" className="base-semibold text-gray-950">
        {t('gallery.filters.title')}
      </h2>
      <Icon name="x" size={5} color="#1A1A1A" handleClick={close} />
    </div>
  );
}

export default FiltersPanelHeader;
