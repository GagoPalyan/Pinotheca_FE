import { SortBy } from '@/components/shared/filters/types';
import { useSearchParams } from 'next/navigation';
import useQueryParams from './useQueryParams';

const useFilters = () => {
  const searchParams = useSearchParams();
  const setQueryParams = useQueryParams();

  const sort: SortBy = (searchParams.get('sort') as SortBy) ?? SortBy.ASC;

  return { sort, setQueryParams };
};

export default useFilters;
