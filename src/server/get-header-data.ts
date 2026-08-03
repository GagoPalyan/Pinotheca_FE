'use server';

import { cookies } from 'next/headers';
import { API } from '../utils/api/api.utils';
import { IHeaderData, LayoutApiUrls } from '@/types';

const getHeaderData = async (): Promise<IHeaderData | null> => {
  try {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('accessToken')?.value;

    if (!accessToken) return null;

    return await API.get(LayoutApiUrls.USER_INFO, {
      tags: ['user-info'],
    });
  } catch {
    return null;
  }
};

export default getHeaderData;
