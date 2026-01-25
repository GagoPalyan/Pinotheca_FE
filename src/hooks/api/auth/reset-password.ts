import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import { AuthAPIPathEnum } from './paths';
import { useMutation } from '@tanstack/react-query';
import { AuthPathEnum, type TResetPasswordRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/helpers/api.utils';
import { TErrorMessage, TErrorResponse } from '@/types/global.types';

const resetPassword = async (
  data: TResetPasswordRequest,
): Promise<TAccessTokenResponse | TErrorMessage> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.RESET_PASSWORD, data);
    setAccessToken(result.accessToken);
    return result;
  } catch (error) {
    const errorMessage = (error as TErrorResponse).response.data;
    return errorMessage;
  }
};
const useResetPassword = () => {
  return useMutation({
    mutationKey: ['resetPassword', AuthPathEnum.RESET_PASSWORD],
    mutationFn: resetPassword,
  });
};

export { useResetPassword };
