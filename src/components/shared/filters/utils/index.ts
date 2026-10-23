import { clampNumber } from '@/utils/helpers';
import { FILTER_GROUPS, FILTER_LABELS, RANGE_FILTER_KEYS } from '../constants';
import type {
  TActiveFilterChip,
  TFilterArrayKey,
  TFilterRangeKey,
  TFiltersForm,
  TTranslateFn,
} from '../types';

function toggleListItem(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function parseOptionalNumber(value: string, fallback: number): number {
  if (value === '') return fallback;

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
}

function getPriceBounds(minPrice: number, maxPrice: number) {
  const min = minPrice;
  const max = maxPrice > minPrice ? maxPrice : minPrice + 1;

  return { min, max };
}

function resolvePriceValues(
  priceMin: string,
  priceMax: string,
  rangeMin: number,
  rangeMax: number,
) {
  const numericMin = clampNumber(parseOptionalNumber(priceMin, rangeMin), rangeMin, rangeMax);
  const numericMax = clampNumber(parseOptionalNumber(priceMax, rangeMax), rangeMin, rangeMax);

  return {
    safeMin: Math.min(numericMin, numericMax),
    safeMax: Math.max(numericMin, numericMax),
  };
}

function getOptionLabelKey(key: TFilterArrayKey, value: string): string {
  return FILTER_LABELS.get(`${key}:${value}`) ?? value;
}

function getRangeChipLabel(
  t: TTranslateFn,
  key: TFilterRangeKey,
  min: string,
  max: string,
): string {
  if (min && max) return t(`gallery.filters.chip.${key}`, { min, max });
  if (min) return t(`gallery.filters.chip.${key}Min`, { value: min });

  return t(`gallery.filters.chip.${key}Max`, { value: max });
}

function getActiveFilterChips(values: TFiltersForm, t: TTranslateFn): TActiveFilterChip[] {
  const chips: TActiveFilterChip[] = [];

  FILTER_GROUPS.forEach(({ key }) => {
    const selectedValues = values[key];

    selectedValues.forEach((value) => {
      chips.push({
        id: `${key}:${value}`,
        label: t(getOptionLabelKey(key, value)),
        patch: { [key]: selectedValues.filter((item) => item !== value) },
      });
    });
  });

  RANGE_FILTER_KEYS.forEach((key) => {
    const minKey = `${key}Min` as const;
    const maxKey = `${key}Max` as const;
    const min = values[minKey];
    const max = values[maxKey];

    if (!min && !max) return;

    chips.push({
      id: key,
      label: getRangeChipLabel(t, key, min, max),
      patch: { [minKey]: '', [maxKey]: '' },
    });
  });

  return chips;
}

function getActiveFiltersCount(values: TFiltersForm): number {
  return (
    values.material.length +
    values.paint.length +
    values.type.length +
    (values.priceMin || values.priceMax ? 1 : 0) +
    (values.widthMin || values.widthMax ? 1 : 0) +
    (values.heightMin || values.heightMax ? 1 : 0)
  );
}

export {
  toggleListItem,
  getPriceBounds,
  resolvePriceValues,
  getActiveFilterChips,
  getActiveFiltersCount,
};
