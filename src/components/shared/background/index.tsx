import { twMerge } from 'tailwind-merge';

interface IBackground {
  isOpen: boolean;
}

function Background({ isOpen }: IBackground) {
  return (
    <div
      className={twMerge(
        'fixed top-0 left-0 h-full w-screen backdrop-blur-md bg-amber-700/15 z-800 transition-all duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
      )}
    />
  );
}

export default Background;
