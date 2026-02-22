import { TInputTypes } from './global.types';

export enum AuthPathEnum {
  REGISTER = '/register',
  MAGIC_LINK = '/magic-link',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  REFRESH = '/auth/refresh',
  LOGOUT = '/auth/logout',
  ME = '/auth/me',
}

export type TRegisterEmailForm = {
  email: string;
};
export type TRegisterEmailResponse = {
  message: string;
  status: number;
};

export type TRegisterFormFields = {
  name: keyof TRegisterMagicLinkFrom;
  label: string;
  type: TInputTypes;
};
export type TRegisterMagicLinkFrom = {
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};
export interface TRegisterMagicLinkRequest extends TRegisterMagicLinkFrom {
  token: string;
}

export type TLoginFrom = {
  email: string;
  password: string;
};

export type TResetPasswordFrom = {
  password: string;
  confirmPassword: string;
};
export interface TResetPasswordRequest extends TResetPasswordFrom {
  token: string;
}

export type TAccessTokenResponse = {
  accessToken: string;
};

export type TUserData = {
  email: string;
  firstname: string;
  lastname: string;
  _count: {
    likes: number;
    orders: number;
  };
};

export type IHeaderData = {
  profile: string;
  likes: number;
  orders: number;
} | null;
