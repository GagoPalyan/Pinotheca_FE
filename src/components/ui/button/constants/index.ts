export const buttonVariants = {
  primary:
    'text-white border-none bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-300',
  secondary:
    'text-primary-600 border border-primary-600 hover:bg-primary-100 active:bg-primary-200 disabled:bg-gray-300',
  success:
    'text-white border-none bg-success-500 hover:bg-success-600 active:bg-success-700 disabled:bg-gray-300',
  warning:
    'text-white border-none bg-warning-500 hover:bg-warning-600 active:bg-warning7800 disabled:bg-gray-300',
  danger:
    'text-white border-none bg-error-500 hover:bg-error-600 active:bg-error-700 disabled:bg-gray-300',
  ghost:
    'text-gray-600 border-none bg-primary-25 hover:bg-primary-50 active:bg-primary-200 disabled:bg-gray-300',
};
export const buttonSizes = {
  small: 'px-3 py-1',
  medium: 'px-4 py-1.5',
  large: 'px-6 py-2',
};

export type IButtonVariants = keyof typeof buttonVariants;
export type IButtonSizes = keyof typeof buttonSizes;
