import MagicLinkPage from '@/components/views/magic-link';
import Loading from '@/components/shared/loading';
import { Suspense } from 'react';

function MagicLink() {
  return (
    <Suspense fallback={<Loading />}>
      <MagicLinkPage />
    </Suspense>
  );
}

export default MagicLink;
