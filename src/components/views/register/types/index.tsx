import type { TRegisterEmailResponse } from '@/types/auth.types';
import type { Dispatch, SetStateAction } from 'react';

export interface IRegisterSuccessModal {
  modalContent: TRegisterEmailResponse | null;
  setModalContent: Dispatch<SetStateAction<TRegisterEmailResponse | null>>;
}
