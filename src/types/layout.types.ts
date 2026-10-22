enum LayoutApiUrls {
  USER_INFO = '/layout/user-info',
}

type IHeaderData = {
  likes: number;
  carts: number;
  nameFirstLater: string;
  imageUrl: string | null;
};

export { LayoutApiUrls, type IHeaderData };
