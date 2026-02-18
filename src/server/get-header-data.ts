'use server';

import { cookies } from 'next/headers';
import { API } from '../utils/api/api.utils';
import { AuthPathEnum, IHeaderData, TUserData } from '@/types/auth.types';

const getHeaderData = async () => {
  try {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('accessToken')?.value;

    if (!accessToken) return null;

    const data: TUserData | null = await API.get(AuthPathEnum.ME);

    if (!data) return null;

    const { firstname, _count } = data;

    const headerData: IHeaderData = {
      profile: firstname[0],
      ..._count,
    };

    return headerData;
  } catch {
    return null;
  }
};

export default getHeaderData;
