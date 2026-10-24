import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Background from '../background';

interface IOverlayDialog {
  isOpen: boolean;
  titleId: string;
  className?: string;
  children: ReactNode;
}

function OverlayDialog({ isOpen, titleId, className, children }: IOverlayDialog) {
  return (
    <div
      className={twMerge(
        'fixed top-14 right-0 z-800 h-[calc(100dvh-56px)] w-screen',
        isOpen ? 'visible opacity-100' : 'invisible opacity-0 delay-350',
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <Background isOpen={isOpen} />
      {children}
    </div>
  );
}

export default OverlayDialog;
