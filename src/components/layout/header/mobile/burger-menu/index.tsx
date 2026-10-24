'use client';

import { useMobileMenu } from '../Context';
import BurgerMenuContent from './Content';
import OverlayDialog from '@/components/shared/overlay-dialog';

function BurgerMenu() {
  const { isOpen } = useMobileMenu();

  return (
    <OverlayDialog isOpen={isOpen} titleId="mobile-menu-title" className="hidden max-md:block">
      <BurgerMenuContent />
    </OverlayDialog>
  );
}

export default BurgerMenu;
