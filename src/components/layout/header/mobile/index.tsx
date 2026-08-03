import MobileHeaderContent from './mobile';
import { MobileMenuProvider } from './context';
import { IHeaderData } from '@/types';

function MobileHeader({ data }: { data: IHeaderData }) {
  return (
    <MobileMenuProvider data={data}>
      <MobileHeaderContent />
    </MobileMenuProvider>
  );
}

export default MobileHeader;
