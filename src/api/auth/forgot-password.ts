import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { API } from '@/api';
import { AuthAPIPathEnum } from './paths';
import type { TError } from '@/types/global';
import {
  AuthPathEnum,
  type TRegisterEmailForm,
  type TRegisterEmailResponse,
} from '@/types/auth.types';

const forgotPassword = async (data: TRegisterEmailForm): Promise<TRegisterEmailResponse> => {
  const response = await API.post<TRegisterEmailResponse>(AuthAPIPathEnum.FORGOT_PASSWORD, data);

  return response;
};

const onError = (error: TError) => {
  toast.error(error.message);
};

const useForgotPassword = () => {
  return useMutation({
    mutationKey: ['forgotPassword', AuthPathEnum.FORGOT_PASSWORD],
    mutationFn: forgotPassword,
    onError,
  });
};

export { useForgotPassword };
