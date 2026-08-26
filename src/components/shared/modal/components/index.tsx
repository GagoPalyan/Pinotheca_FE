import { IModal } from '../types';
import ModalBackground from './Background';
import ModalContent from './Content';

function Modal({ isOpen, onClose, children, contentClassname }: IModal) {
  if (!isOpen) return null;

  return (
    <ModalBackground onClose={onClose}>
      <ModalContent contentClassname={contentClassname}>{children}</ModalContent>
    </ModalBackground>
  );
}

export default Modal;
