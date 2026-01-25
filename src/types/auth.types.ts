import { TInputTypes } from './global.types';

export enum AuthPathEnum {
  REGISTER = '/register',
  MAGIC_LINK = '/magic-link',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  REFRESH = '/refresh',
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
