'use client';

import { burgerMenuIconStyles } from '@/constants/header';
import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../context';

function BurgerMenuButton() {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <button
      onClick={toggle}
      data-menu-toggle
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="flex flex-col justify-center items-center size-8 gap-1 cursor-pointer"
    >
      {burgerMenuIconStyles.map((style, index) => (
        <span
          key={index}
          className={twMerge('h-0.5 w-6 bg-black transition-all duration-300', isOpen ? style : '')}
        />
      ))}
    </button>
  );
}

export default BurgerMenuButton;
