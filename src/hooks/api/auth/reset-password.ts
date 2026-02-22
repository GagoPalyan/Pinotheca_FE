import { AuthAPIPathEnum } from './paths';
import { useMutation } from '@tanstack/react-query';
import { AuthPathEnum, type TResetPasswordRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/api/api.utils';
import { TErrorMessage } from '@/types/global.types';
import { toast } from 'react-toastify';

const resetPassword = async (
  data: TResetPasswordRequest,
): Promise<TAccessTokenResponse | undefined> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.RESET_PASSWORD, data);
    return result;
  } catch (error) {
    toast.error((error as TErrorMessage).message);
  }
};
const useResetPassword = () => {
  return useMutation({
    mutationKey: ['resetPassword', AuthPathEnum.RESET_PASSWORD],
    mutationFn: resetPassword,
  });
};

export { useResetPassword };
