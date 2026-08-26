import type { IResetPasswordFields } from '../types';

export const RESET_PASSWORD_FIELDS: IResetPasswordFields[] = [
  {
    name: 'password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
  },
];
