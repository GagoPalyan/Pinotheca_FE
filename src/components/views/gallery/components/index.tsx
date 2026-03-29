import Breadcrumbs from '@/components/shared/breadcrumbs';
import Headline from './headline';
import Content from './content';
import { IPicturesResponse } from '../types';
import Pagination from '@/components/shared/pagination';

async function GalleryPage({ data }: { data: IPicturesResponse }) {
  const { data: pictures, meta } = data;

  return (
    <div className="relative w-full bg-primary-25 min-h-screen">
      <Breadcrumbs />
      <Headline />
      <Content pictures={pictures} />
      <Pagination {...meta} />
    </div>
  );
}

export default GalleryPage;
