import Logo from '@/components/shared/logo';
import BurgerMenuButton from './burger-menu/Button';
import BurgerMenu from './burger-menu';

function MobileHeaderContent() {
  return (
    <>
      <div className="max-md:flex hidden items-center justify-between px-4 h-14 bg-neutral-50 relative z-900">
        <Logo />

        <BurgerMenuButton />
      </div>
      <BurgerMenu />
    </>
  );
}

export default MobileHeaderContent;
