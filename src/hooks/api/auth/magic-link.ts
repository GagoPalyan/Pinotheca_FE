import { useMutation } from '@tanstack/react-query';
import { AuthAPIPathEnum } from './paths';
import { setAccessToken } from '@/utils/helpers/setAccessToken.utils';
import { AuthPathEnum, type TRegisterMagicLinkRequest } from '@/types/auth.types';
import type { TAccessTokenResponse } from '@/types/auth.types';
import { API } from '@/utils/helpers/api.utils';
import { TErrorMessage, TErrorResponse } from '@/types/global.types';

const magicLink = async (
  data: TRegisterMagicLinkRequest,
): Promise<TAccessTokenResponse | TErrorMessage> => {
  try {
    const result = await API.post<TAccessTokenResponse>(AuthAPIPathEnum.MAGIC_LINK, data);
    setAccessToken(result.accessToken);

    return result;
  } catch (error) {
    const errorMessage = (error as TErrorResponse).response.data;
    return errorMessage;
  }
};

const useMagicLink = () => {
  return useMutation({
    mutationKey: ['magicLink', AuthPathEnum.MAGIC_LINK],
    mutationFn: magicLink,
  });
};

export { useMagicLink };
