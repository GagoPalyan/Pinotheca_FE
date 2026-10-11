import { clampNumber } from '@/utils/helpers';
import { FILTER_GROUPS } from '../constants';
import type {
  TActiveFilterChip,
  TFilterArrayKey,
  TFiltersForm,
  TSizeBound,
  TSizeDimension,
  TSizeFormField,
  TTranslateFn,
} from '../types';

function getSizeFormField(dimension: TSizeDimension, bound: TSizeBound): TSizeFormField {
  return `${dimension}${bound === 'min' ? 'Min' : 'Max'}`;
}

function getFiltersFormValues(source: TFiltersForm): TFiltersForm {
  return {
    material: [...source.material],
    paint: [...source.paint],
    type: [...source.type],
    priceMin: source.priceMin,
    priceMax: source.priceMax,
    widthMin: source.widthMin,
    widthMax: source.widthMax,
    heightMin: source.heightMin,
    heightMax: source.heightMax,
  };
}

function getFiltersFormKey(values: TFiltersForm): string {
  return [
    values.material.join('\0'),
    values.paint.join('\0'),
    values.type.join('\0'),
    values.priceMin,
    values.priceMax,
    values.widthMin,
    values.widthMax,
    values.heightMin,
    values.heightMax,
  ].join('|');
}

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
  const group = FILTER_GROUPS.find((item) => item.key === key);

  return group?.options.find((option) => option.value === value)?.label ?? value;
}

function getRangeChipLabel(
  t: TTranslateFn,
  key: 'price' | 'width' | 'height',
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
    values[key].forEach((value) => {
      const translated = t(getOptionLabelKey(key, value));

      chips.push({
        id: `${key}:${value}`,
        label: translated.charAt(0).toUpperCase() + translated.slice(1),
        patch: { [key]: values[key].filter((item) => item !== value) },
      });
    });
  });

  if (values.priceMin || values.priceMax) {
    chips.push({
      id: 'price',
      label: getRangeChipLabel(t, 'price', values.priceMin, values.priceMax),
      patch: { priceMin: '', priceMax: '' },
    });
  }

  if (values.widthMin || values.widthMax) {
    chips.push({
      id: 'width',
      label: getRangeChipLabel(t, 'width', values.widthMin, values.widthMax),
      patch: { widthMin: '', widthMax: '' },
    });
  }

  if (values.heightMin || values.heightMax) {
    chips.push({
      id: 'height',
      label: getRangeChipLabel(t, 'height', values.heightMin, values.heightMax),
      patch: { heightMin: '', heightMax: '' },
    });
  }

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
  getFiltersFormValues,
  getFiltersFormKey,
  getSizeFormField,
  toggleListItem,
  getPriceBounds,
  resolvePriceValues,
  getActiveFilterChips,
  getActiveFiltersCount,
};
