import Modal from '@/components/shared/modal';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { PageUrls } from '@/types/path.enums';
import { TRegisterEmailResponse } from '@/types/auth.types';
import { Dispatch, SetStateAction } from 'react';

interface IAuthSuccessModal {
  page: 'register' | 'forgot_password';
  modalContent: TRegisterEmailResponse | null;
  setModalContent: Dispatch<SetStateAction<TRegisterEmailResponse | null>>;
}

function AuthSuccessModal({ modalContent, setModalContent, page }: IAuthSuccessModal) {
  const router = useRouter();
  const t = useTranslations();

  if (!modalContent) return null;

  const { status, message } = modalContent;

  const handleClose = () => {
    setModalContent(null);
  };

  const handleSubmit = () => {
    if (status === 201) return router.push(PageUrls.HOME);
    else handleClose();
  };

  return (
    <Modal
      isOpen={!!modalContent}
      onClose={handleClose}
      contentClassname="items-center max-w-[320px]"
    >
      <span className="h3-medium">{t(`auth.pages.${page}.${status}.title`)}</span>
      <p className="text-medium text-center">{message}</p>
      <Button type="button" customClass="w-fit" handleClick={handleSubmit}>
        {t(`auth.pages.${page}.${status}.button`)}
      </Button>
    </Modal>
  );
}

export default AuthSuccessModal;
