import { IComponentIcons } from '@/types/shared.types';
import { Control, FieldValues } from 'react-hook-form';

export interface IInput extends IComponentIcons {
  type: 'text' | 'number' | 'email' | 'password';
  name: string;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  withController?: boolean;
  disabled?: boolean;
  control?: Control<FieldValues, any, FieldValues>;
}
