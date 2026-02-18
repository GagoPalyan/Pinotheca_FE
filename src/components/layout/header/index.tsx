import getHeaderData from '@/server/get-header-data';
import DesktopHeader from './desktop';

async function Header() {
  const headerData = await getHeaderData();

  return <DesktopHeader info={headerData} />;
}

export default Header;
