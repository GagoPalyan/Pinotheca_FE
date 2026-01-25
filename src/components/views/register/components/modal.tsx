import Modal from '@/components/ui/modal';
import type { IRegisterSuccessModal } from '../types';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function RegisterSuccessModal({ modalContent, setModalContent }: IRegisterSuccessModal) {
  const router = useRouter();
  const t = useTranslations();

  if (!modalContent) return null;

  const { status, message } = modalContent;

  const handleClose = () => {
    setModalContent(null);
  };

  const handleSubmit = () => {
    if (status === 201) return router.push('/');
    else handleClose();
  };

  return (
    <Modal
      isOpen={!!modalContent}
      onClose={handleClose}
      contentClassname="items-center max-w-[320px]"
    >
      <span className="h3-medium">{t(`auth.pages.register.${status}.title`)}</span>
      <p className="text-medium text-center">{message}</p>
      <Button type="button" customClass="w-fit" handleClick={handleSubmit}>
        {t(`auth.pages.register.${status}.button`)}
      </Button>
    </Modal>
  );
}

export default RegisterSuccessModal;
