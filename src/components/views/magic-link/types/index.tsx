import { IInput } from '@/components/ui/input/types';
import { TRegisterMagicLinkFrom } from '@/types/auth.types';

export interface IMagicLinkFields {
  name: keyof TRegisterMagicLinkFrom;
  type: IInput['type'];
}
