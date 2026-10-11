import { TInputTypes } from './global.types';

enum AuthPathEnum {
  REGISTER = '/register',
  MAGIC_LINK = '/magic-link',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  REFRESH = '/auth/refresh',
  LOGOUT = '/auth/logout',
  ME = '/auth/me',
}

type TRegisterEmailForm = {
  email: string;
};
type TRegisterEmailResponse = {
  message: string;
  status: number;
};

type TRegisterFormFields = {
  name: keyof TRegisterMagicLinkFrom;
  label: string;
  type: TInputTypes;
};

type TRegisterMagicLinkFrom = {
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};
interface TRegisterMagicLinkRequest extends TRegisterMagicLinkFrom {
  token: string;
}

type TLoginFrom = {
  email: string;
  password: string;
};

type TResetPasswordFrom = {
  password: string;
  confirmPassword: string;
};
interface TResetPasswordRequest extends TResetPasswordFrom {
  token: string;
}

type TAccessTokenResponse = {
  accessToken: string;
};

type TUserData = {
  email: string;
  firstname: string;
  lastname: string;
  likes: number;
  carts: number;
};

export {
  AuthPathEnum,
  type TRegisterEmailForm,
  type TRegisterEmailResponse,
  type TRegisterFormFields,
  type TRegisterMagicLinkRequest,
  type TRegisterMagicLinkFrom,
  type TLoginFrom,
  type TResetPasswordFrom,
  type TResetPasswordRequest,
  type TAccessTokenResponse,
  type TUserData,
};
