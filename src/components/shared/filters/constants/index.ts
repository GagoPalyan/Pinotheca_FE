import type { TDropdownItem } from '@/components/ui/dropdown/types';
import { SortBy } from '../types';

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

export { SORT_LIST };
