'use client';

import { IHeaderData } from '@/types';
import DesktopHeader from './desktop';
import MobileHeader from './mobile';
import { useUserInfo } from '@/hooks/socket/useHeaderWs';

interface IProps {
  info: IHeaderData | null;
}

function Header({ info }: IProps) {
  const data = useUserInfo(info);

  return (
    <header>
      <DesktopHeader data={data} />
      <MobileHeader data={data} />
    </header>
  );
}

export default Header;
