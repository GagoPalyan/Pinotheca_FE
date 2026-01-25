import Modal from '@/components/ui/modal';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function RegisterSuccessModal({ modalContent, setModalContent }) {
  const router = useRouter();
  const t = useTranslations();

  if (!modalContent) return null;

  const handleClose = () => {
    setModalContent(null);
  };

  const handleSubmit = () => {
    if (modalContent === 'success') return router.push('/');
    else handleClose();
  };

  return (
    <Modal
      isOpen={!!modalContent}
      onClose={handleClose}
      contentClassname="items-center max-w-[320px]"
    >
      <span className="h3-medium">{t(`auth.pages.magic_link.${modalContent}_message.title`)}</span>
      <p className="text-medium text-center">
        {t(`auth.pages.magic_link.${modalContent}_message.text`)}
      </p>
      <Button type="button" customClass="w-fit" handleClick={handleSubmit}>
        {t(`auth.pages.magic_link.${modalContent}_message.button`)}
      </Button>
    </Modal>
  );
}

export default RegisterSuccessModal;
