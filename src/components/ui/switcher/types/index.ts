import type { ReactNode } from 'react';

interface ISwitcherOption<T extends string = string> {
  value: T;
  label: ReactNode;
}

interface ISwitcher<T extends string = string> {
  options: readonly ISwitcherOption<T>[];
  value: T;
  onChange: (value: T) => void;
  customClass?: string;
}

export type { ISwitcherOption, ISwitcher };
