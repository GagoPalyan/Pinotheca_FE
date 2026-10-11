'use client';

import Headline from './Headline';
import Content from './Content';
import Breadcrumbs from '@/components/shared/breadcrumbs/components';
import Pagination from '@/components/shared/pagination';
import type { IPicturesResponse } from '../types';
import Filters from '@/components/shared/filters';

function GalleryPage({ data }: { data: IPicturesResponse }) {
  const { data: pictures, meta } = data;

  return (
    <div className="relative w-full bg-primary-25 h-layout">
      <Breadcrumbs />
      <Headline />
      <Filters minPrice={meta.minPrice} maxPrice={meta.maxPrice} />
      <Content pictures={pictures} />
      <Pagination {...meta} />
    </div>
  );
}

export default GalleryPage;
