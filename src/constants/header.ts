import { PageUrls } from '@/types/path.enums';

export const headerNavPages = [
  {
    name: 'artists',
    href: PageUrls.ARTISTS,
  },
  {
    name: 'gallery',
    href: PageUrls.GALLERY,
  },
  {
    name: 'about-us',
    href: PageUrls.ABOUT_US,
  },
];

export const headerDashboardPages = [
  {
    name: 'favorites',
    keyName: 'likes',
    icon: 'favorites',
    href: PageUrls.FAVORITES,
  },
  {
    name: 'cart',
    keyName: 'orders',
    icon: 'cart',
    href: PageUrls.CART,
  },
] as const;
