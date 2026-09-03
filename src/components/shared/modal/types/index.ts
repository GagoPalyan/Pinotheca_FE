interface IModalBasic {
  onClose: () => void;
  children: React.ReactNode;
}

interface IModal extends IModalBasic {
  isOpen: boolean;
  contentClassname?: string;
}

interface IModalContent {
  contentClassname?: string;
  children: React.ReactNode;
}

export type { IModalBasic, IModal, IModalContent };
