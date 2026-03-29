import type { IPicture } from '../types';

interface IProps {
  pictures: IPicture[];
}

function Content({ pictures }: IProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {pictures.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </section>
  );
}

export default Content;
