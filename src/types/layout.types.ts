type IHeaderInfo = {
  likes: number;
  carts: number;
};

type IHeaderData =
  | ({
      profile: string;
    } & IHeaderInfo)
  | null;

export type { IHeaderData, IHeaderInfo };
