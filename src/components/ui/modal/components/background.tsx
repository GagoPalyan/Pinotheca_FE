import type { MouseEvent } from 'react';
import { IModalBasic } from '../types';

function ModalBackground({ onClose, children }: IModalBasic) {
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div onClick={handleClose} className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-amber-500/30 z-1000">
      {children}
    </div>
  );
}

export default ModalBackground;
