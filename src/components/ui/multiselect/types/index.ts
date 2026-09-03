type TMultiselectItem<T = string> = {
  icon?: string;
  label: string;
  value: T;
};

type TMultiselectToggle<T> = (value: T) => void;

interface IMultiselectProps<T> {
  value: T[];
  list: TMultiselectItem<T>[];
  onToggle: TMultiselectToggle<T>;
  placeholder?: string;
  dropdownPosition?: 'top' | 'bottom';
  chevronColor?: string;
  customClass?: string;
}

interface IMultiselectTriggerProps {
  open: boolean;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  label?: string;
  placeholder?: string;
  chevronColor?: string;
  customClass?: string;
}

interface IMultiselectListProps<T> {
  value: T[];
  list: TMultiselectItem<T>[];
  onToggle: TMultiselectToggle<T>;
  dropdownPosition?: 'top' | 'bottom';
}

export type {
  TMultiselectItem,
  TMultiselectToggle,
  IMultiselectProps,
  IMultiselectTriggerProps,
  IMultiselectListProps,
};
