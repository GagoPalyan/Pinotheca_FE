'use client';

import { twMerge } from 'tailwind-merge';
import { useMobileMenu } from '../context';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import BurgerMenuNavigation from './navigation';
import BurgerMenuAuth from './auth';
import dynamic from 'next/dynamic';

const LanguageSwitcher = dynamic(() => import('@/components/shared/language-switcher'), {
  ssr: false,
});

function BurgerMenuContent() {
  const t = useTranslations('common.pages');
  const { isOpen, close } = useMobileMenu();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: PointerEvent) => {
      const target = e.target as HTMLElement;

      const clickedToggle = target.closest('[data-menu-toggle]');
      const clickedInsideMenu = menuRef.current && menuRef.current.contains(target);

      if (!clickedInsideMenu && !clickedToggle) close();
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen, close]);

  return (
    <aside
      ref={menuRef}
      className={twMerge(
        'h-full w-xs absolute top-0 right-0 bg-white p-6 flex flex-col justify-between shadow-lg transform transition-transform duration-300 ease-in-out z-900',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <BurgerMenuNavigation />

      <div className="flex gap-4 items-end justify-between">
        <LanguageSwitcher dropdownPosition="top" />
        <BurgerMenuAuth />
      </div>
    </aside>
  );
}

export default BurgerMenuContent;
