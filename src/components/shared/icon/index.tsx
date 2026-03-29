import type { IIcon } from '@/types/shared.types';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

function Icon({ name = '', size = 6, color = '#8C8989', iconClass = '', handleClick }: IIcon) {
  if (!name) return null;

  const iconSize = size * 4;

  const onClick = useCallback(() => {
    if (handleClick) handleClick();
  }, [handleClick]);

  return (
    <div
      onClick={onClick}
      style={{
        maskImage: `url(/icons/${name}.svg)`,
        minWidth: iconSize,
        maxWidth: iconSize,
        backgroundColor: color,
      }}
      className={twMerge(
        'aspect-square mask-center mask-no-repeat mask-contain',
        iconClass,
        handleClick ? 'cursor-pointer' : '',
      )}
    ></div>
  );
}

export default Icon;
