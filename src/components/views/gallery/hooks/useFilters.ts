import { useSearchParams } from 'next/navigation';

interface GalleryFilters {
  search: string;
  page: number;
}

const useFilters = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;

  return { search, page } as GalleryFilters;
};

export default useFilters;
