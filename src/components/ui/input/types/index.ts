import type { InputHTMLAttributes } from 'react';
import { IComponentIcons } from '@/types/shared.types';
import { Control, FieldValues } from 'react-hook-form';

interface IInput
  extends IComponentIcons, Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'size'> {
  type: 'text' | 'number' | 'email' | 'password';
  name: string;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  withController?: boolean;
  disabled?: boolean;
  control?: Control<FieldValues, any, FieldValues>;
}

export type { IInput };
