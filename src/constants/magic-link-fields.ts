import { TRegisterFormFields } from '@/types/auth/magic-link.types';

export const magicLinkFields: TRegisterFormFields[] = [
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
