import type { TMeta } from '@/types/global.types';

export interface IPicture {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
  width: string;
  height: string;
  author: {
    select: {
      id: string;
      firstname: string;
      lastname: string;
    };
  };
}

export interface IPicturesResponse {
  data: IPicture[];
  meta: TMeta;
}

export interface ISearchParams {
  page?: string;
  search?: string;
}
