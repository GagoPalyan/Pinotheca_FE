'use client';

import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../context';

function BurgerMenuBackground() {
  const { isOpen } = useMobileMenu();

  return (
    <div
      className={twMerge(
        'absolute top-0 left-0 h-full w-screen backdrop-blur-md bg-amber-700/15 z-800 transition-opacity duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
      )}
    />
  );
}

export default BurgerMenuBackground;
