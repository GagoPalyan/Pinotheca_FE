import type { TRegisterFormFields } from '@/types/auth.types';

const MAGIC_LINK_FIELDS: TRegisterFormFields[] = [
  {
    name: 'firstname',
    label: 'First Name',
    type: 'text',
  },
  {
    name: 'lastname',
    label: 'Last Name',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
  },
];

export { MAGIC_LINK_FIELDS };
