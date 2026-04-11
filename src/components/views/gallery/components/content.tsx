import Card from '@/components/shared/card';
import type { IPicture } from '@/types/picture.types';

interface IProps {
  pictures: IPicture[];
}

function Content({ pictures }: IProps) {
  return (
    <section className="px-3 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {pictures.map((picture) => (
        <Card key={picture.id} {...picture} />
      ))}
    </section>
  );
}

export default Content;
