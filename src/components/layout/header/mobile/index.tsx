import MobileHeaderContent from './Mobile';
import { MobileMenuProvider } from './Context';
import type { IHeaderData } from '@/types';

function MobileHeader({ data }: { data: IHeaderData }) {
  return (
    <MobileMenuProvider data={data}>
      <MobileHeaderContent />
    </MobileMenuProvider>
  );
}

export default MobileHeader;
