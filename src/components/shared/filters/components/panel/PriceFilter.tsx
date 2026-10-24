'use client';

import { useTranslations } from 'next-intl';
import { toDigitsOnly } from '@/utils/helpers';
import DualRangeSlider from '@/components/ui/dual-range-slider';
import Input from '@/components/ui/input';
import { useFiltersPanel } from '../Context';
import { getPriceBounds, resolvePriceValues } from '../../utils';
import type { TFilterRangeKey } from '../../types';

interface IPriceFilter {
  filterKey: TFilterRangeKey;
  minValue: string;
  maxValue: string;
  onChange: (min: string, max: string) => void;
}

function PriceFilter({ minValue, maxValue, filterKey, onChange }: IPriceFilter) {
  const t = useTranslations('gallery.filters');
  const { filters } = useFiltersPanel();
  const { min, max } = filters[filterKey];
  const { min: rangeMin, max: rangeMax } = getPriceBounds(min, max);
  const { safeMin, safeMax } = resolvePriceValues(minValue, maxValue, rangeMin, rangeMax);

  return (
    <div className="flex flex-col gap-3 w-full border-b border-gray-200 pb-2">
      <h3 className="base-semibold text-gray-950">{t(filterKey)}</h3>

      <DualRangeSlider
        min={rangeMin}
        max={rangeMax}
        valueMin={safeMin}
        valueMax={safeMax}
        onChange={(min, max) => onChange(String(min), String(max))}
      />

      <div className="flex gap-3 w-full">
        <Input
          id={`${filterKey}:min`}
          type="text"
          name="priceMin"
          placeholder={t('min')}
          inputMode="numeric"
          value={minValue}
          onChange={(e) => onChange(toDigitsOnly(e.target.value), maxValue)}
        />
        <Input
          id={`${filterKey}:max`}
          type="text"
          name="priceMax"
          placeholder={t('max')}
          inputMode="numeric"
          value={maxValue}
          onChange={(e) => onChange(minValue, toDigitsOnly(e.target.value))}
        />
      </div>
    </div>
  );
}

export default PriceFilter;
