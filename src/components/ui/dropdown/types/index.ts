import type { IComponentIcons } from '@/types/shared.types';
import type { Dispatch, SetStateAction } from 'react';

type TDropdownItem<T = string | number> = {
  icon?: string;
  label: string;
  value: T;
};

type IDropdownChange<T> = (value: T) => void;
interface IDropdownTrigger extends IComponentIcons {
  dropdownPosition?: 'top' | 'bottom';
  placeholder?: string;
  customClass?: string;
  labelValue?: 'label' | 'value';
  disabled?: boolean;
  chevronColor?: string;
}

interface IDropdownProps<T> extends IDropdownTrigger {
  value: TDropdownItem<T>['value'];
  list: TDropdownItem<T>[];
  onSelect: IDropdownChange<T>;
}

interface IDropdownTriggerProps extends IDropdownTrigger {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  label?: TDropdownItem['label'];
}

export type {
  TDropdownItem,
  IDropdownChange,
  IDropdownTrigger,
  IDropdownProps,
  IDropdownTriggerProps,
};
