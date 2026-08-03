import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/components/shared/loading';
import GalleryPage, { type ISearchParams, getPictures } from '@/components/views/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Online Gallery - Find your favorite pictures',
};

async function Gallery({ searchParams }: { searchParams: Promise<ISearchParams> }) {
  const params = await searchParams;
  const data = await getPictures(params);

  return (
    <Suspense fallback={<Loading />}>
      <GalleryPage data={data} />;
    </Suspense>
  );
}

export default Gallery;
