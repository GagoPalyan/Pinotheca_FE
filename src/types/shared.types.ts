import type { ReactElement } from 'react';

export interface IAuthLayout {
  title?: string;
  text?: string;
  hideLoginWithGoogle?: boolean;
  children: ReactElement;
}

export interface IIcon {
  name: string;
  size?: number;
  color?: string;
  iconClass?: string;
  handleClick?: () => void;
}

export interface IComponentIcons {
  prependIcon?: string;
  appendIcon?: string;
}
