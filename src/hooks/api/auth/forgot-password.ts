import { useMutation } from '@tanstack/react-query';
import { AuthAPIPathEnum } from './paths';
import {
  AuthPathEnum,
  type TRegisterEmailForm,
  type TRegisterEmailResponse,
} from '@/types/auth.types';
import { API } from '@/utils/helpers/api.utils';
import type { TErrorResponse } from '@/types/global.types';

const forgotPassword = async (data: TRegisterEmailForm): Promise<TRegisterEmailResponse> => {
  try {
    const response = await API.post<TRegisterEmailResponse>(AuthAPIPathEnum.FORGOT_PASSWORD, data);
    return response;
  } catch (error) {
    const errorMessage = (error as TErrorResponse).response.data;
    return errorMessage;
  }
};

const useForgotPassword = () => {
  return useMutation({
    mutationKey: ['forgotPassword', AuthPathEnum.FORGOT_PASSWORD],
    mutationFn: forgotPassword,
  });
};

export { useForgotPassword };
