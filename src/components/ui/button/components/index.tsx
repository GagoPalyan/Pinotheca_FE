'use client';

import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { IButton } from '../types';
import { BUTTON_ICONS_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../constants';
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
        'w-full flex items-center justify-center gap-2 rounded-lg outline-none cursor-pointer',
        BUTTON_SIZES[size],
        BUTTON_VARIANTS[variant],
        customClass,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {prependIcon && <Icon name={prependIcon} size={4} color={BUTTON_ICONS_COLORS[variant]} />}
      {children}
      {appendIcon && <Icon name={prependIcon} size={4} color={BUTTON_ICONS_COLORS[variant]} />}
    </button>
  );
}

export default Button;
