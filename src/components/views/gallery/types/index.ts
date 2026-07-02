import type { TMeta } from '@/types/global.types';
import type { IPicture } from '@/types/picture.types';

export interface IPicturesResponse {
  data: IPicture[];
  meta: TMeta;
}

export interface IPictureLikeResponse {
  liked: boolean;
  message: string;
}

export interface ISearchParams {
  page?: string;
  search?: string;
}

export type TGalleryFilters = {
  search: string;
  page: number;
  limit: number;
};
