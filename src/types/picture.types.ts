interface IPicture {
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
  isLiked: boolean;
}

export type { IPicture };
