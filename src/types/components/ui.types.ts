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
