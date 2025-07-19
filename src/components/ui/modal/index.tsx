import type { IModal } from '@/types/components/ui.types';
import ModalBackground from './background';

function Modal({ isOpen, onClose, children }: IModal) {
  if (!isOpen) return null;

  return <ModalBackground onClose={onClose}>{children}</ModalBackground>;
}

export default Modal;
