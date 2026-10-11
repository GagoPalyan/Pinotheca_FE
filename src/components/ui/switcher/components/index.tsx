'use client';

import { twMerge } from 'tailwind-merge';
import type { ISwitcher } from '../types';

function Switcher<T extends string>({ options, value, customClass, onChange }: ISwitcher<T>) {
  return (
    <div className={twMerge('w-full flex border-b border-gray-200', customClass)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={twMerge(
            'px-4 py-1.5 border-b-2 cursor-pointer w-full',
            value === option.value
              ? 'text-gray-900 border-gray-900 font-semibold'
              : 'text-gray-500 border-transparent font-normal',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Switcher;
