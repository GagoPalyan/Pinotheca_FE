import type { TMeta } from '@/types/global.types';
import type { IPicture } from '@/types/picture.types';

type TPicturesMeta = TMeta & {
  minPrice: number;
  maxPrice: number;
};

interface IPicturesResponse {
  data: IPicture[];
  meta: TPicturesMeta;
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
  sort?: string;
  material?: string | string[];
  paint?: string | string[];
  type?: string | string[];
  priceMin?: string;
  priceMax?: string;
  widthMin?: string;
  widthMax?: string;
  heightMin?: string;
  heightMax?: string;
}

type TGalleryFilters = {
  search: string;
  page: number;
  limit: number;
};

export type {
  TPicturesMeta,
  IPicturesResponse,
  IPictureLikeResponse,
  IPictureCartResponse,
  ISearchParams,
  TGalleryFilters,
};
