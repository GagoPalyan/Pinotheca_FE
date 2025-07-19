import { API } from '@/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { TError } from '@/types/global';
import {
  AuthPathEnum,
  type TRegisterEmailForm,
  type TRegisterEmailResponse,
} from '@/types/auth.types';
import { AuthAPIPathEnum } from './paths';

const register = async (data: TRegisterEmailForm): Promise<TRegisterEmailResponse> => {
  const response = await API.post<TRegisterEmailResponse>(AuthAPIPathEnum.REGISTER, data);

  return response;
};

const onError = (error: TError) => {
  toast.error(error.message);
};

const useRegister = () => {
  return useMutation({
    mutationKey: ['register', AuthPathEnum.REGISTER],
    mutationFn: register,
    onError,
  });
};

export { useRegister };
