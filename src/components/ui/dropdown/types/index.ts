import type { IComponentIcons } from '@/types/shared.types';
import type { Dispatch, SetStateAction } from 'react';

export type TDropdownItem<T = string | number> = {
  icon?: string;
  label: string;
  value: T;
};

export type IDropdownChange<T> = (value: T) => void;
export interface IDropdownTrigger extends IComponentIcons {
  placeholder?: string;
  customClass?: string;
  labelValue?: 'label' | 'value';
  disabled?: boolean;
}

export interface IDropdownProps<T> extends IDropdownTrigger {
  value: TDropdownItem<T>['value'];
  list: TDropdownItem<T>[];
  onSelect: IDropdownChange<T>;
}

export interface IDropdownTriggerProps extends IDropdownTrigger {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  label?: TDropdownItem['label'];
}
