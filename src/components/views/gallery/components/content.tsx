'use client';

import Card from '@/components/shared/card';
import type { IPicture } from '@/types/picture.types';

function Content({ pictures }: { pictures: IPicture[] }) {
  return (
    <section className="w-container h-max gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {pictures.map((picture) => (
        <Card key={picture.id} {...picture} />
      ))}
    </section>
  );
}

export default Content;
