'use client';

import Headline from './headline';
import Content from './content';
import Breadcrumbs from '@/components/shared/breadcrumbs';
import Pagination from '@/components/shared/pagination';
import type { IPicturesResponse } from '../types';
import useGetPictures from '@/hooks/api/gallery/useGetPictures';

function GalleryPage({ initialData }: { initialData: IPicturesResponse }) {
  const { data, isLoading } = useGetPictures(initialData);
  const { data: pictures, meta } = data;

  return (
    <div className="relative w-full bg-primary-25 min-h-screen">
      <Breadcrumbs />
      <Headline />
      <Content isLoading={isLoading} pictures={pictures} />
      <Pagination {...meta} />
    </div>
  );
}

export default GalleryPage;
