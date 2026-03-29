import { API } from '@/utils/api/api.utils';
import type { IPicturesResponse } from '../types';

export const getPictures = async (
  searchParams: Promise<{
    page?: string;
    search?: string;
    limit?: string;
  }>,
) => {
  'use server';

  const { search, page, limit } = await searchParams;
  const pictures = await API.get<IPicturesResponse>('/pictures', {
    params: { search, page, limit },
  });

  return pictures;
};
