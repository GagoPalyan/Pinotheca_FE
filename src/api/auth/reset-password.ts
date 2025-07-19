import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import { API } from '..';
import { AuthAPIPathEnum } from './paths';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import type { TError } from '@/types/global';
import { AuthPathEnum, type TResetPasswordRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';

const resetPassword = async (data: TResetPasswordRequest): Promise<TAccessTokenResponse> => {
  const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.RESET_PASSWORD, data);
  return result;
};

const onSuccess = ({ accessToken }: TAccessTokenResponse) => {
  setAccessToken(accessToken);
};

const onError = (error: TError) => {
  toast.error(error.message);
};

const useResetPassword = () => {
  return useMutation({
    mutationKey: ['resetPassword', AuthPathEnum.RESET_PASSWORD],
    mutationFn: resetPassword,
    onSuccess,
    onError,
  });
};

export { useResetPassword };
