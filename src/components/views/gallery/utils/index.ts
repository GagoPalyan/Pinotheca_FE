import { API } from '@/utils/api/api.utils';
import type { TParams } from '@/types';
import type { IPicturesResponse, ISearchParams } from '../types';

const getPictures = async (params: ISearchParams) => {
  'use server';

  return await API.get<IPicturesResponse>('/pictures', { params: params as TParams });
};

export { getPictures };
