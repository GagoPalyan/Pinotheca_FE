import MobileHeaderContent from './mobile';
import { MobileMenuProvider } from './context';
import type { IHeaderData } from '@/types/auth.types';

function MobileHeader({ info }: { info: IHeaderData }) {
  return (
    <MobileMenuProvider info={info}>
      <MobileHeaderContent />
    </MobileMenuProvider>
  );
}

export default MobileHeader;
