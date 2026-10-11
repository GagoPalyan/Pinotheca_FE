'use client';

import Icon from '@/components/shared/icon';
import { twMerge } from 'tailwind-merge';
import type { IMultiselectTriggerProps } from '../types';

function MultiselectTrigger({
  open,
  setOpen,
  label,
  placeholder = '',
  chevronColor = 'black',
  customClass,
}: IMultiselectTriggerProps) {
  return (
    <button
      className={twMerge(
        'flex items-center w-full gap-2 cursor-pointer text-gray-950 text-normal',
        customClass,
      )}
      type="button"
      onClick={() => setOpen(!open)}
    >
      <span className="truncate text-left">{label || placeholder}</span>
      <Icon
        name="chevron-down"
        size={4}
        color={chevronColor}
        iconClass={twMerge('transition ml-auto shrink-0 duration-300', open ? 'rotate-180' : '')}
      />
    </button>
  );
}

export default MultiselectTrigger;
