import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { API } from '..';
import { AuthAPIPathEnum } from './paths';
import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import type { TError } from '@/types/global';
import { AuthPathEnum, type TRegisterMagicLinkRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';

const magicLink = async (data: TRegisterMagicLinkRequest): Promise<TAccessTokenResponse> => {
  const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.MAGIC_LINK, data);

  return result;
};

const onSuccess = ({ accessToken }: TAccessTokenResponse) => {
  setAccessToken(accessToken);
};

const onError = (error: TError) => {
  toast.error(error.message);
};

const useMagicLink = () => {
  return useMutation({
    mutationKey: ['magicLink', AuthPathEnum.MAGIC_LINK],
    mutationFn: magicLink,
    onSuccess,
    onError,
  });
};

export { useMagicLink };
