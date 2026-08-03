import { IPicture } from '@/types';

interface IProps {
  title: string;
  author: IPicture['author'];
  width: string;
  height: string;
}

function CardInfo({ title, author, width, height }: IProps) {
  return (
    <div className="flex flex-col text-gray-950">
      <h2 className="big-semibold truncate">{title}</h2>
      <h3 className="text-normal">
        {author.firstname} {author.lastname}
      </h3>
      <div className="flex items-center justify-between">
        <span className="small-normal">Some info</span>
        <span className="small-normal">
          {width} x {height} cm
        </span>
      </div>
    </div>
  );
}

export default CardInfo;
