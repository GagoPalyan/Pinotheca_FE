import React from 'react';
import { IInput } from '../types';
import { twMerge } from 'tailwind-merge';

function InputComponent({
  name,
  type,
  placeholder,
  disabled,
  appendIcon,
  prependIcon,
  ...props
}: IInput) {
  return (
    <input
      {...props}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={twMerge(
        'text-medium text-gray-950 outline-none border-none w-full h-full rounded-sm',
        prependIcon ? 'pl-11' : 'pl-3',
        appendIcon || type === 'password' ? 'pr-11' : 'pr-3',
      )}
    />
  );
}

export default InputComponent;
