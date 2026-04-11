import type { TMeta } from '@/types/global.types';
import type { IPicture } from '@/types/picture.types';

export interface IPicturesResponse {
  data: IPicture[];
  meta: TMeta;
}

export interface ISearchParams {
  page?: string;
  search?: string;
}
