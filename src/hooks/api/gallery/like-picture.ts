import { IPictureLikeResponse } from '@/components/views/gallery';
import { API } from '@/utils/api/api.utils';
import { useMutation } from '@tanstack/react-query';
import { pictureLikePath } from './paths';

const likePicture = async (pictureId: string) =>
  await API.post<IPictureLikeResponse>(pictureLikePath(pictureId));

const useLikePicture = () =>
  useMutation({
    mutationFn: likePicture,
    mutationKey: ['like-picture'],
  });

export { useLikePicture };
