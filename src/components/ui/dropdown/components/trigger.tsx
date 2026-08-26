import Icon from '@/components/shared/icon';
import type { IDropdownTriggerProps } from '../types';
import { twMerge } from 'tailwind-merge';

function DropdownTrigger({
  open,
  setOpen,
  label,
  placeholder = '',
  prependIcon,
  chevronColor = 'black',
  customClass,
}: IDropdownTriggerProps) {
  return (
    <button
      className={twMerge(
        'flex items-center w-full gap-2 cursor-pointer text-gray-950 text-normal',
        customClass,
      )}
      type="button"
      onClick={() => setOpen(!open)}
    >
      {prependIcon && <Icon name={prependIcon} size={4} color="black" />}
      <span>{label ?? placeholder}</span>

      <Icon
        name="chevron-down"
        size={4}
        color={chevronColor}
        iconClass={twMerge('transition ml-auto duration-300', open ? 'rotate-180' : '')}
      />
    </button>
  );
}

export default DropdownTrigger;
