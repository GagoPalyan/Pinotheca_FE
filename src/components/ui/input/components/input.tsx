import React from 'react';
import { IInput } from '../types';

function InputComponent({ name, type, placeholder, disabled, ...props }: IInput) {
  return (
    <input
      {...props}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="text-medium text-gray-950 outline-none border-none w-full h-full"
    />
  );
}

export default InputComponent;
