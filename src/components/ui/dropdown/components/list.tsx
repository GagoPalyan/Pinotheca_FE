import Icon from '@/components/shared/icon';
import React from 'react';
import { IDropdownProps } from '../types';
import { twMerge } from 'tailwind-merge';

function DropdownList<T>({ value: isSelected, list, onSelect }: IDropdownProps<T>) {
  return (
    <div className="absolute z-30 mt-1 w-full rounded-sm bg-white shadow-lg max-h-40 overflow-y-auto">
      {list.map(({ label, value, icon }, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelect(value)}
          className={twMerge(
            'cursor-pointer duration-200 rounded-md  hover:bg-primary-100 transition-all w-full px-2 py-1 flex items-center gap-5',
            isSelected === value && 'bg-primary-50',
          )}
        >
          {icon && <Icon name={icon} />}
          <span className="base-normal">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default DropdownList;
