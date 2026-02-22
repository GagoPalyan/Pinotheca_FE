import Loading from '@/components/shared/loading';
import MagicLinkPage from '@/components/views/magic-link';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Magic Link',
  description: 'Magic Link page',
};

function MagicLink() {
  return (
    <Suspense fallback={<Loading />}>
      <MagicLinkPage />
    </Suspense>
  );
}

export default MagicLink;
