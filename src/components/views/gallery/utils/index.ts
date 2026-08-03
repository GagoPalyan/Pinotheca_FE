import { API } from '@/utils/api/api.utils';
import type { IPicturesResponse } from '../types';

type TGetPictures = {
  page?: string;
  search?: string;
  limit?: string;
};

const getPictures = async (params: TGetPictures) => {
  'use server';

  return await API.get<IPicturesResponse>('/pictures', { params });
};

export { getPictures };
