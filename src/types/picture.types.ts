interface IPicture {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
  width: string;
  height: string;
  material: string;
  type: string;
  paint: string;
  author: {
    id: string;
    firstname: string;
    lastname: string;
  };
  isLiked: boolean;
  isInCart: boolean;
}

export type { IPicture };
