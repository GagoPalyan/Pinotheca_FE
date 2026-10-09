import type { ComponentType } from 'react';
import type { IPicture } from '@/types/picture.types';

interface IPictureDetail extends IPicture {
  description: string;
  year: number;
  sharesCount: number;
  likesCount: number;
  author: IPicture['author'] & {
    imageUrl: string;
    pictures: IPicture[];
  };
}

interface IPictureShareResponse {
  sharesCount: number;
  message: string;
}

interface IPictureDetailsTabPanel {
  picture: IPictureDetail;
}

type TPictureDetailsTab = 'about' | 'dimensions';

type TPictureDetailsTabItem = {
  key: TPictureDetailsTab;
  translationKey: string;
  Component: ComponentType<IPictureDetailsTabPanel>;
};

export type {
  IPictureDetail,
  IPictureShareResponse,
  IPictureDetailsTabPanel,
  TPictureDetailsTab,
  TPictureDetailsTabItem,
};
