import { SortBy, type TFiltersForm } from '@/components/shared/filters/types';
import { useSearchParams } from 'next/navigation';
import useQueryParams from './useQueryParams';

const useFilters = () => {
  const searchParams = useSearchParams();
  const setQueryParams = useQueryParams();

  const sort: SortBy = (searchParams.get('sort') as SortBy) ?? SortBy.DESC;
  const values: TFiltersForm = {
    material: searchParams.getAll('material'),
    paint: searchParams.getAll('paint'),
    type: searchParams.getAll('type'),
    priceMin: searchParams.get('priceMin') || '',
    priceMax: searchParams.get('priceMax') || '',
    widthMin: searchParams.get('widthMin') || '',
    widthMax: searchParams.get('widthMax') || '',
    heightMin: searchParams.get('heightMin') || '',
    heightMax: searchParams.get('heightMax') || '',
  };

  return { sort, values, setQueryParams };
};

export default useFilters;
