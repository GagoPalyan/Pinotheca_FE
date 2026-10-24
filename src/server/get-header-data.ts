'use server';

import { API } from '../utils/api/api.utils';
import { IHeaderData, LayoutApiUrls } from '@/types';

async function getHeaderData(): Promise<IHeaderData | null> {
  try {
    return await API.get(LayoutApiUrls.USER_INFO, {
      cache: 'no-store',
    });
  } catch {
    return null;
  }
}

export default getHeaderData;
