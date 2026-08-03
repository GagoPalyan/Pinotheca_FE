import { IPictureCartResponse } from '@/components/views/gallery';
import { API } from '@/utils/api/api.utils';
import { useMutation } from '@tanstack/react-query';
import { GalleryPaths } from './paths';

const cartPicture = async (pictureId: string) =>
  await API.post<IPictureCartResponse>(`${GalleryPaths.PICTURE_CART}${pictureId}`);

const useCartPicture = () =>
  useMutation({
    mutationFn: cartPicture,
    mutationKey: ['cart-picture'],
  });

export { useCartPicture };
