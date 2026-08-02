import getHeaderData from '@/server/get-header-data';
import DesktopHeader from './desktop';
import MobileHeader from './mobile';

async function Header() {
  const headerData = await getHeaderData();

  console.log(headerData);

  return (
    <header>
      <DesktopHeader info={headerData} />
      <MobileHeader info={headerData} />
    </header>
  );
}

export default Header;
