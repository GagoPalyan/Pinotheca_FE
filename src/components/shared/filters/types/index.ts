enum SortBy {
  ASC = 'asc',
  DESC = 'desc',
}

enum MaterialEnum {
  canvas = 'canvas',
  cardboard = 'cardboard',
  paper = 'paper',
  plywood = 'plywood',
}

enum PaintEnum {
  oilPaint = 'oilPaint',
  acrylic = 'acrylic',
  waterColor = 'waterColor',
  gouache = 'gouache',
  pencil = 'pencil',
  mixedMedia = 'mixedMedia',
  charcoal = 'charcoal',
  ink = 'ink',
}

enum TypeEnum {
  vertical = 'vertical',
  horizontal = 'horizontal',
  square = 'square',
  round = 'round',
  oval = 'oval',
}

type TFilterOption = {
  value: string;
  label: string;
};

type TFiltersForm = {
  material: string[];
  paint: string[];
  type: string[];
  priceMin: string;
  priceMax: string;
  widthMin: string;
  widthMax: string;
  heightMin: string;
  heightMax: string;
};

type TFilterArrayKey = keyof Pick<TFiltersForm, 'material' | 'paint' | 'type'>;

type TSizeDimension = 'width' | 'height';

type TSizeBound = 'min' | 'max';

type TSizeFormField = `${TSizeDimension}${Capitalize<TSizeBound>}`;

type TRangeFieldKey = {
  key: TSizeDimension;
  labels: readonly TSizeBound[];
};

type TFilterGroupConfig = {
  key: TFilterArrayKey;
  options: TFilterOption[];
};

type TFilters = TFiltersForm & {
  sort: SortBy;
};

type TActiveFilterChip = {
  id: string;
  label: string;
  patch: Partial<TFiltersForm>;
};

type TTranslateFn = (key: string, values?: Record<string, string | number>) => string;

export {
  SortBy,
  MaterialEnum,
  PaintEnum,
  TypeEnum,
  type TActiveFilterChip,
  type TFilters,
  type TFilterArrayKey,
  type TFilterGroupConfig,
  type TFilterOption,
  type TFiltersForm,
  type TRangeFieldKey,
  type TSizeBound,
  type TSizeDimension,
  type TSizeFormField,
  type TTranslateFn,
};
