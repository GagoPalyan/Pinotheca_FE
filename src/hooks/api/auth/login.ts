import { useMutation } from '@tanstack/react-query';
import { AuthAPIPathEnum } from './paths';
import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import type { TErrorMessage } from '@/types/global.types';
import { AuthPathEnum, type TLoginFrom } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/helpers/api.utils';
import { toast } from 'react-toastify';

const login = async (data: TLoginFrom): Promise<TAccessTokenResponse | undefined> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.LOGIN, data);
    setAccessToken(result.accessToken);
    return result;
  } catch (error) {
    toast.error((error as TErrorMessage).message);
  }
};

const useLogin = () => {
  return useMutation({
    mutationKey: ['login', AuthPathEnum.LOGIN],
    mutationFn: login,
  });
};

export { useLogin };
