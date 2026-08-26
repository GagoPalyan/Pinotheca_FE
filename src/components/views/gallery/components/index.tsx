'use client';

import Headline from './headline';
import Content from './content';
import Breadcrumbs from '@/components/shared/breadcrumbs';
import Pagination from '@/components/shared/pagination';
import type { IPicturesResponse } from '../types';
import Filters from '@/components/shared/filters';

function GalleryPage({ data }: { data: IPicturesResponse }) {
  const { data: pictures, meta } = data;

  return (
    <div className="relative w-full bg-primary-25 h-layout">
      <Breadcrumbs />
      <Headline />
      <Filters />
      <Content pictures={pictures} />
      <Pagination {...meta} />
    </div>
  );
}

export default GalleryPage;
