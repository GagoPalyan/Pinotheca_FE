import { useMutation } from '@tanstack/react-query';
import {
  AuthPathEnum,
  type TRegisterEmailForm,
  type TRegisterEmailResponse,
} from '@/types/auth.types';
import { AuthAPIPathEnum } from './paths';
import { API } from '@/utils/helpers/api.utils';
import { TErrorMessage } from '@/types/global.types';
import { toast } from 'react-toastify';

const register = async (data: TRegisterEmailForm): Promise<TRegisterEmailResponse> => {
  try {
    const response = await API.post<TRegisterEmailResponse>(AuthAPIPathEnum.REGISTER, data);
    return response;
  } catch (error) {
    const errorMessage = error as TErrorMessage;
    toast.error((error as TErrorMessage).message);
    return errorMessage;
  }
};

const useRegister = () => {
  return useMutation({
    mutationKey: ['register', AuthPathEnum.REGISTER],
    mutationFn: register,
  });
};

export { useRegister };
