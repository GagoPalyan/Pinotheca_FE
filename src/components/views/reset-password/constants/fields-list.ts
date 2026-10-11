import type { IResetPasswordFields } from '../types';

const RESET_PASSWORD_FIELDS: IResetPasswordFields[] = [
  {
    name: 'password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
  },
];

export { RESET_PASSWORD_FIELDS };
