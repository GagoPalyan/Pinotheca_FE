export interface IModalBasic {
  onClose: () => void;
  children: React.ReactNode;
}

export interface IModal extends IModalBasic {
  isOpen: boolean;
  contentClassname?: string;
}

export interface IModalContent {
  contentClassname?: string;
  children: React.ReactNode;
}
