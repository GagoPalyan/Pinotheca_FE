'use client';

import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { IButton } from '../types';
import { buttonSizes, buttonVariants } from '../constants';
import Icon from '@/components/shared/icon';

function Button({
  variant = 'primary',
  type = 'button',
  size = 'medium',
  customClass,
  disabled,
  children,
  handleClick,
  prependIcon = '',
  appendIcon = '',
}: IButton) {
  const onClick = useCallback(() => {
    if (handleClick) handleClick();
  }, [handleClick]);

  return (
    <button
      className={twMerge(
        'w-full flex items-center justify-center gap-1 rounded-lg outline-none cursor-pointer',
        buttonSizes[size],
        buttonVariants[variant],
        prependIcon ? 'pl-11' : 'pl-3',
        appendIcon ? 'pr-11' : 'pr-3',
        customClass,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {prependIcon && <Icon name={prependIcon} size={4} iconClass="absolute left-3" />}
      {children}
      {appendIcon && <Icon name={prependIcon} size={4} iconClass="absolute left-3" />}
    </button>
  );
}

export default Button;
