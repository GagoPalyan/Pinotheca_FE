import { cache } from 'react';
import { API } from '@/utils/api/api.utils';
import type { IPictureDetail } from '../types';

const getPicture = cache(async (id: string) => {
  'use server';

  return await API.get<IPictureDetail>(`/pictures/${id}`);
});

export { getPicture };
