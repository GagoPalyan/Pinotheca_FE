import MobileHeaderContent from './mobile';
import { MobileMenuProvider } from './context';
import { IHeaderData } from '@/types';

function MobileHeader({ info }: { info: IHeaderData }) {
  return (
    <MobileMenuProvider info={info}>
      <MobileHeaderContent />
    </MobileMenuProvider>
  );
}

export default MobileHeader;
