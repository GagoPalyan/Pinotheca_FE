import { IComponentIcons } from '@/types/components/ui.types';
import { IButtonSizes, IButtonVariants } from '../constants';

export interface IButton extends IComponentIcons {
  variant?: IButtonVariants;
  type?: 'button' | 'submit';
  size?: IButtonSizes;
  disabled?: boolean;
  customClass?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
}
