import { IPictureLikeResponse } from '@/components/views/gallery';
import { API } from '@/utils/api/api.utils';
import { useMutation } from '@tanstack/react-query';

const likePicture = async (pictureId: string) =>
  await API.post<IPictureLikeResponse>(`/pictures/like/${pictureId}`);

const useLikePicture = () =>
  useMutation({
    mutationFn: likePicture,
    mutationKey: ['like-picture'],
  });

export default useLikePicture;
