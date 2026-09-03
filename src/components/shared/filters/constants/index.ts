import type { TDropdownItem } from '@/components/ui/dropdown/types';
import {
  MaterialEnum,
  PaintEnum,
  SortBy,
  TypeEnum,
  type TFilterGroupConfig,
  type TFilterOption,
  type TFiltersForm,
  type TRangeFieldKey,
} from '../types';

const SORT_LIST: TDropdownItem<SortBy>[] = [
  {
    icon: 'arrow-down',
    label: SortBy.ASC.toUpperCase(),
    value: SortBy.ASC,
  },
  {
    icon: 'arrow-up',
    label: SortBy.DESC.toUpperCase(),
    value: SortBy.DESC,
  },
];

const MATERIAL_OPTIONS: TFilterOption[] = [
  { value: MaterialEnum.canvas, label: 'gallery.picture.material.canvas' },
  { value: MaterialEnum.cardboard, label: 'gallery.picture.material.cardboard' },
  { value: MaterialEnum.paper, label: 'gallery.picture.material.paper' },
  { value: MaterialEnum.plywood, label: 'gallery.picture.material.plywood' },
];

const PAINT_OPTIONS: TFilterOption[] = [
  { value: PaintEnum.oilPaint, label: 'gallery.picture.paint.oilPaint' },
  { value: PaintEnum.acrylic, label: 'gallery.picture.paint.acrylic' },
  { value: PaintEnum.watercolor, label: 'gallery.picture.paint.watercolor' },
  { value: PaintEnum.gouache, label: 'gallery.picture.paint.gouache' },
  { value: PaintEnum.pencil, label: 'gallery.picture.paint.pencil' },
  { value: PaintEnum.mixedMedia, label: 'gallery.picture.paint.mixedMedia' },
  { value: PaintEnum.charcoal, label: 'gallery.picture.paint.charcoal' },
  { value: PaintEnum.ink, label: 'gallery.picture.paint.ink' },
];

const TYPE_OPTIONS: TFilterOption[] = [
  { value: TypeEnum.vertical, label: 'gallery.picture.type.vertical' },
  { value: TypeEnum.horizontal, label: 'gallery.picture.type.horizontal' },
  { value: TypeEnum.square, label: 'gallery.picture.type.square' },
  { value: TypeEnum.round, label: 'gallery.picture.type.round' },
  { value: TypeEnum.oval, label: 'gallery.picture.type.oval' },
];

const EMPTY_FILTERS_FORM: TFiltersForm = {
  material: [],
  paint: [],
  type: [],
  priceMin: '',
  priceMax: '',
  widthMin: '',
  widthMax: '',
  heightMin: '',
  heightMax: '',
};

const FILTER_GROUPS: TFilterGroupConfig[] = [
  { key: 'material', options: MATERIAL_OPTIONS },
  { key: 'paint', options: PAINT_OPTIONS },
  { key: 'type', options: TYPE_OPTIONS },
];

const MIN_MAX_LABELS = ['min', 'max'] as const;

const SIZE_FIELD_ROWS: TRangeFieldKey[] = [
  {
    key: 'width',
    labels: MIN_MAX_LABELS,
  },
  {
    key: 'height',
    labels: MIN_MAX_LABELS,
  },
];

export {
  SORT_LIST,
  MATERIAL_OPTIONS,
  PAINT_OPTIONS,
  TYPE_OPTIONS,
  EMPTY_FILTERS_FORM,
  FILTER_GROUPS,
  SIZE_FIELD_ROWS,
};
