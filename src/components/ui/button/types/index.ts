import { IComponentIcons } from '@/types/shared.types';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../constants';

type IButtonVariants = keyof typeof BUTTON_VARIANTS;
type IButtonSizes = keyof typeof BUTTON_SIZES;
interface IButton extends IComponentIcons {
  variant?: IButtonVariants;
  type?: 'button' | 'submit';
  size?: IButtonSizes;
  disabled?: boolean;
  customClass?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
}

export type { IButtonVariants, IButtonSizes, IButton };
