'use client';

import { useQuery } from '@tanstack/react-query';
import type { TGalleryFilters, IPicturesResponse } from '@/components/views/gallery';
import { API } from '@/utils/api/api.utils';
import useFilters from '@/components/views/gallery/hooks/useFilters';

const getPictures = async (params: TGalleryFilters) =>
  await API.get<IPicturesResponse>('/pictures', { params });

const useGetPictures = (initialData: IPicturesResponse) => {
  const { search, page, limit } = useFilters();

  return useQuery({
    queryKey: ['pictures', search, page, limit],
    queryFn: () => getPictures({ search, page, limit }),
    initialData,
    refetchOnMount: false,
  });
};

export default useGetPictures;
