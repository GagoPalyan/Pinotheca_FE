'use client';

import { useTranslations } from 'next-intl';
import { toDigitsOnly } from '@/utils/helpers';
import DualRangeSlider from '@/components/ui/dual-range-slider';
import Input from '@/components/ui/input';
import { useFiltersPanel } from '../../Context';
import { getPriceBounds, resolvePriceValues } from '../../utils';

interface IPriceFilter {
  priceMin: string;
  priceMax: string;
  onChange: (min: string, max: string) => void;
}

function PriceFilter({ priceMin, priceMax, onChange }: IPriceFilter) {
  const t = useTranslations('gallery.filters');
  const { minPrice, maxPrice } = useFiltersPanel();
  const { min: rangeMin, max: rangeMax } = getPriceBounds(minPrice, maxPrice);
  const { safeMin, safeMax } = resolvePriceValues(priceMin, priceMax, rangeMin, rangeMax);

  return (
    <div className="flex flex-col gap-3 w-full border-b border-gray-200 pb-2">
      <h3 className="base-semibold text-gray-950">{t('price')}</h3>

      <DualRangeSlider
        min={rangeMin}
        max={rangeMax}
        valueMin={safeMin}
        valueMax={safeMax}
        onChange={(min, max) => onChange(String(min), String(max))}
      />

      <div className="flex gap-3 w-full">
        <Input
          type="text"
          name="priceMin"
          placeholder={t('min')}
          inputMode="numeric"
          value={priceMin}
          onChange={(e) => onChange(toDigitsOnly(e.target.value), priceMax)}
        />
        <Input
          type="text"
          name="priceMax"
          placeholder={t('max')}
          inputMode="numeric"
          value={priceMax}
          onChange={(e) => onChange(priceMin, toDigitsOnly(e.target.value))}
        />
      </div>
    </div>
  );
}

export default PriceFilter;
