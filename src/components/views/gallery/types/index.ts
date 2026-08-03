import type { TMeta } from '@/types/global.types';
import type { IPicture } from '@/types/picture.types';

interface IPicturesResponse {
  data: IPicture[];
  meta: TMeta;
}

interface IPictureLikeResponse {
  liked: boolean;
  message: string;
}

interface IPictureCartResponse {
  isInCart: boolean;
  message: string;
}

interface ISearchParams {
  page?: string;
  search?: string;
  limit?: string;
}

type TGalleryFilters = {
  search: string;
  page: number;
  limit: number;
};

export type {
  IPicturesResponse,
  IPictureLikeResponse,
  IPictureCartResponse,
  ISearchParams,
  TGalleryFilters,
};
