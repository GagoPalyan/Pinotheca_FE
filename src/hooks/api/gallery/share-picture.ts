import type { IPictureShareResponse } from '@/components/views/picture';
import { API } from '@/utils/api/api.utils';
import { useMutation } from '@tanstack/react-query';
import { pictureSharePath } from './paths';

const sharePicture = async (pictureId: string) =>
  await API.post<IPictureShareResponse>(pictureSharePath(pictureId));

const useSharePicture = () =>
  useMutation({
    mutationFn: sharePicture,
    mutationKey: ['share-picture'],
  });

export { useSharePicture };
