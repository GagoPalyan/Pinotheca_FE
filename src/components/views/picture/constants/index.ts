import AboutContent from '../components/AboutContent';
import DimensionsContent from '../components/DimensionsContent';
import type { TPictureDetailsTabItem } from '../types';

const FAQ_IDS = ['original', 'purchase', 'details', 'returns'] as const;

const SHARE_NETWORKS = [
  {
    id: 'facebook',
    icon: 'facebook',
    href: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'instagram',
    icon: 'instagram',
    href: (url: string) => `https://www.instagram.com/`,
  },
  {
    id: 'pinterest',
    icon: 'pinterest',
    href: (url: string, imageUrl: string, title: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(title)}`,
  },
] as const;

const PAYMENT_ICONS = ['paypal', 'visa', 'mastercard'] as const;

const PICTURE_DETAILS_TABS = [
  {
    key: 'about',
    translationKey: 'tabs.about',
    Component: AboutContent,
  },
  {
    key: 'dimensions',
    translationKey: 'tabs.dimensions',
    Component: DimensionsContent,
  },
] as const satisfies ReadonlyArray<TPictureDetailsTabItem>;

export { FAQ_IDS, SHARE_NETWORKS, PAYMENT_ICONS, PICTURE_DETAILS_TABS };
