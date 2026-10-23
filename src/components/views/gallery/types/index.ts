import type { TFilterRangeKey } from '@/components/shared/filters/types';
import type { TMeta } from '@/types/global.types';
import type { IPicture } from '@/types/picture.types';

type TFilterRange = { min: number; max: number };

type TFiltersMeta = Record<TFilterRangeKey, TFilterRange>;

interface IPicturesResponse {
  data: IPicture[];
  meta: TMeta;
  filters: TFiltersMeta;
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
  TFiltersMeta,
  IPicturesResponse,
  IPictureLikeResponse,
  IPictureCartResponse,
  ISearchParams,
  TGalleryFilters,
};
