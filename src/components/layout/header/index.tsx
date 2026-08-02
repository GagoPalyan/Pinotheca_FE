import getHeaderData from '@/server/get-header-data';
import DesktopHeader from './desktop';
import MobileHeader from './mobile';
import { useUserInfo } from '@/hooks/socket/useHeaderWs';

async function Header() {
  const headerData = await getHeaderData();

  return (
    <header>
      <DesktopHeader info={headerData} />
      <MobileHeader info={headerData} />
    </header>
  );
}

export default Header;
