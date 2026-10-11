'use client';

import Modal from '@/components/shared/modal';
import Image from '@/components/ui/image';

interface IZoomModal {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

function ZoomModal({ isOpen, onClose, imageUrl, title }: IZoomModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} contentClassname="w-fit h-fit p-2">
      <Image
        src={imageUrl}
        alt={title}
        width={1600}
        height={1600}
        priority
        customClass="max-w-[95dvw] max-h-[95dvh] w-fit h-fit rounded-lg object-contain aspect-auto"
      />
    </Modal>
  );
}

export default ZoomModal;
