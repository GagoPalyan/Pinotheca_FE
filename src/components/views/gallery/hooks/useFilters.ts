import { useSearchParams } from 'next/navigation';
import type { TGalleryFilters } from '../types';

const useFilters = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 12;

  return { search, page, limit } as TGalleryFilters;
};

export default useFilters;
