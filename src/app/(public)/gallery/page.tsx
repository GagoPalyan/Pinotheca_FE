import GalleryPage, { type ISearchParams, getPictures } from '@/components/views/gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Online Gallery - Find your favorite pictures',
};

async function Gallery({ searchParams }: { searchParams: Promise<ISearchParams> }) {
  const data = await getPictures(searchParams);

  return <GalleryPage initialData={data} />;
}

export default Gallery;
