import { IInput } from '@/components/ui/input/types';
import { TResetPasswordFrom } from '@/types/auth.types';

export interface IResetPasswordFields {
  name: keyof TResetPasswordFrom;
  type: IInput['type'];
}
