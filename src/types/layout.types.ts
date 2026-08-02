type IHeaderInfo = {
  likes: number;
  orders: number;
};

type IHeaderData =
  | ({
      profile: string;
    } & IHeaderInfo)
  | null;

export type { IHeaderData, IHeaderInfo };
