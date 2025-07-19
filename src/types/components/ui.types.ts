import React from 'react';

export interface IModalBasic {
  onClose: () => void;
  children: React.ReactNode;
}

export interface IModal extends IModalBasic {
  isOpen: boolean;
}
