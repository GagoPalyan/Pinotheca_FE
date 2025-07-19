import type { IModalBasic } from '@/types/components/ui.types';
import type { MouseEvent } from 'react';

function ModalBackground({ onClose, children }: IModalBasic) {
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div onClick={handleClose} className="w-screen h-screen">
      {children}
    </div>
  );
}

export default ModalBackground;
