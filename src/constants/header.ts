import { PageUrls } from '@/types/path.types';

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
    keyName: 'carts',
    icon: 'cart',
    href: PageUrls.CART,
  },
] as const;

export const burgerMenuIconStyles = [
  'rotate-45 translate-y-1.5',
  'opacity-0',
  '-rotate-45 -translate-y-1.5',
];

export const burgerMenuPagesList = [
  {
    name: 'home',
    keyName: null,
    href: PageUrls.HOME,
  },
  {
    name: 'artists',
    keyName: null,
    href: PageUrls.ARTISTS,
  },
  {
    name: 'gallery',
    keyName: null,
    href: PageUrls.GALLERY,
  },
  {
    name: 'about-us',
    keyName: null,
    href: PageUrls.ABOUT_US,
  },
  {
    name: 'favorites',
    keyName: 'likes',
    href: PageUrls.FAVORITES,
  },
  {
    name: 'cart',
    keyName: 'carts',
    href: PageUrls.CART,
  },
] as const;
