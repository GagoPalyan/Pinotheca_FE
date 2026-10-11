import type { ReactElement } from 'react';

interface IAuthLayout {
  title?: string;
  text?: string;
  hideLoginWithGoogle?: boolean;
  children: ReactElement;
}

interface IIcon {
  name: string;
  size?: number;
  color?: string;
  iconClass?: string;
  handleClick?: () => void;
}

interface IComponentIcons {
  prependIcon?: string;
  appendIcon?: string;
}

export type { IAuthLayout, IIcon, IComponentIcons };
