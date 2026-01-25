import { useMutation } from '@tanstack/react-query';
import { AuthAPIPathEnum } from './paths';
import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import type { TErrorMessage, TErrorResponse } from '@/types/global.types';
import { AuthPathEnum, type TLoginFrom } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/helpers/api.utils';

const login = async (data: TLoginFrom): Promise<TAccessTokenResponse | TErrorMessage> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.LOGIN, data);
    setAccessToken(result.accessToken);
    return result;
  } catch (error) {
    const errorMessage: TErrorMessage = (error as TErrorResponse).response.data;
    return errorMessage;
  }
};

const useLogin = () => {
  return useMutation({
    mutationKey: ['login', AuthPathEnum.LOGIN],
    mutationFn: login,
  });
};

export { useLogin };
