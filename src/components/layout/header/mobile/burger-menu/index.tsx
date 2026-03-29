'use client';

import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../context';
import BurgerMenuBackground from './background';
import BurgerMenuContent from './content';

function BurgerMenu() {
  const { isOpen } = useMobileMenu();

  return (
    <div
      className={twMerge(
        'max-md:block hidden fixed top-14 right-0 z-800 h-[calc(100dvh-56px)] w-screen',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-300',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <BurgerMenuBackground />
      <BurgerMenuContent />
    </div>
  );
}

export default BurgerMenu;
