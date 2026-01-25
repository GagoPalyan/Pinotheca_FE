import type { IIcon } from '@/types/shared.types';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

function Icon({ name = '', size = 6, color = '#8C8989', iconClass = '', handleClick }: IIcon) {
  if (!name) return null;

  const onClick = useCallback(() => {
    if (handleClick) handleClick();
  }, [handleClick]);

  return (
    <div
      onClick={onClick}
      style={{
        maskImage: `url(/icons/${name}.svg)`,
        minWidth: size * 4,
        maxWidth: size * 4,
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
