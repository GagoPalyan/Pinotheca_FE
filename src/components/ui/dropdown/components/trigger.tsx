import Icon from '@/components/shared/icon';
import type { IDropdownTriggerProps } from '../types';
import { twMerge } from 'tailwind-merge';

function DropdownTrigger({
  open,
  setOpen,
  label,
  placeholder = '',
  prependIcon,
  customClass,
}: IDropdownTriggerProps) {
  return (
    <button
      className={twMerge('flex items-center w-full gap-2 cursor-pointer', customClass)}
      type="button"
      onClick={() => setOpen(!open)}
    >
      {prependIcon && <Icon name={prependIcon} size={4} color="black" />}
      <span className="text-gray-950 text-normal">{label ?? placeholder}</span>

      <Icon
        name="chevron-down"
        size={4}
        color="black"
        iconClass={twMerge('transition ml-auto duration-300', open ? 'rotate-180' : '')}
      />
    </button>
  );
}

export default DropdownTrigger;
