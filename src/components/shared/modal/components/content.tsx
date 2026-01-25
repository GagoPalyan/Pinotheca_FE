import { twMerge } from 'tailwind-merge';
import { IModalContent } from '../types';

function ModalContent({ contentClassname, children }: IModalContent) {
  return (
    <div className={twMerge('z-10 bg-white rounded-xl p-3 flex flex-col gap-3 shadow-md', contentClassname)}>
      {children}
    </div>
  );
}

export default ModalContent;
