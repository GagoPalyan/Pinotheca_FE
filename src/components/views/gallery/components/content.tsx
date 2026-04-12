'use client';

import Card from '@/components/shared/card';
import Loading from '@/components/shared/loading';
import type { IPicture } from '@/types/picture.types';

interface IProps {
  pictures: IPicture[];
  isLoading: boolean;
}

function Content({ pictures, isLoading }: IProps) {
  if (isLoading)
    return (
      <div className="w-full min-h-80 flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <section className="px-3 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {pictures.map((picture) => (
        <Card key={picture.id} {...picture} />
      ))}
    </section>
  );
}

export default Content;
