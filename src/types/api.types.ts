type TParams = { [key: string]: unknown };

type TErrorObject = { status: number; message: string };

type GetOptions = {
  params?: TParams;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};



export type { GetOptions, TErrorObject, TParams };
