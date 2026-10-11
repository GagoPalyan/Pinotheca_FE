'use client';

import { useEffect } from 'react';
import { IModal } from '../types';
import ModalBackground from './Background';
import ModalContent from './Content';

function Modal({ isOpen, onClose, children, contentClassname }: IModal) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalBackground onClose={onClose}>
      <ModalContent contentClassname={contentClassname}>{children}</ModalContent>
    </ModalBackground>
  );
}

export default Modal;
