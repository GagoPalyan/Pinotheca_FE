import type { IPictureDetail } from '../types';

interface IAboutContent {
  picture: IPictureDetail;
}

function AboutContent({ picture }: IAboutContent) {
  return <p className="w-full base-normal text-black whitespace-pre-wrap">{picture.description}</p>;
}

export default AboutContent;
