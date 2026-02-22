import { useMutation } from '@tanstack/react-query';
import { AuthAPIPathEnum } from './paths';
import { AuthPathEnum, type TRegisterMagicLinkRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/api/api.utils';
import { TErrorMessage, TErrorResponse } from '@/types/global.types';
import { toast } from 'react-toastify';

const magicLink = async (
  data: TRegisterMagicLinkRequest,
): Promise<TAccessTokenResponse | undefined> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.MAGIC_LINK, data);
    return result;
  } catch (error) {
    toast.error((error as TErrorMessage).message);
  }
};

const useMagicLink = () => {
  return useMutation({
    mutationKey: ['magicLink', AuthPathEnum.MAGIC_LINK],
    mutationFn: magicLink,
  });
};

export { useMagicLink };
