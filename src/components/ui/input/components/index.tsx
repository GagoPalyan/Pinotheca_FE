'use client';

import Icon from '@/components/shared/icon';
import { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import InputComponent from './input';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { IInput } from '../types';

function Input({
  name,
  type = 'text',
  label,
  placeholder,
  errorMessage,
  prependIcon = '',
  appendIcon = '',
  withController = false,
  control,
  disabled = false,
  ...props
}: IInput) {
  const t = useTranslations();
  const [inputType, setInputType] = useState<IInput['type']>(type);

  const showPassword = useCallback(() => {
    const newType: IInput['type'] = inputType === 'password' ? 'text' : 'password';
    setInputType(newType);
  }, [inputType]);

  return (
    <div className="w-full flex flex-col gap-1 items-start">
      {label && (
        <label htmlFor={name} className="base-semibold text-gray-950">
          {t(label)}
        </label>
      )}
      <div
        className={twMerge(
          'flex items-center justify-between border rounded-sm h-11 w-full px-3 gap-3',
          errorMessage ? 'border-error-500' : 'border-gray-400',
        )}
      >
        {prependIcon && <Icon name={prependIcon} size={4} />}
        {withController ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <InputComponent
                {...props}
                {...field}
                name={name}
                type={inputType}
                placeholder={placeholder}
                disabled={disabled}
              />
            )}
          />
        ) : (
          <InputComponent
            {...props}
            name={name}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
        {type === 'password' ? (
          <Icon
            name={inputType === 'password' ? 'lucide_eye' : 'lucide_eye_off'}
            size={4}
            handleClick={showPassword}
          />
        ) : appendIcon ? (
          <Icon name={appendIcon} size={4} />
        ) : null}
      </div>
      <span className="base-normal text-error-500">{errorMessage && t(errorMessage)}</span>
    </div>
  );
}

export default Input;
