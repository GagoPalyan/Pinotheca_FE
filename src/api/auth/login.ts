import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { API } from '..';
import { AuthAPIPathEnum } from './paths';
import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import type { TError } from '@/types/global';
import { AuthPathEnum, type TLoginFrom } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';

const login = async(data: TLoginFrom): Promise<TAccessTokenResponse> => {
  const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.LOGIN, data);
  return result;
};

const onSuccess = ({ accessToken }: TAccessTokenResponse) => {
  setAccessToken(accessToken);
};

const onError = (error: TError) => {
  toast.error(error.message);
};

const useLogin = () => {
  return useMutation({
    mutationKey: ['login', AuthPathEnum.LOGIN],
    mutationFn: login,
    onSuccess,
    onError,
  });
};

export { useLogin };
