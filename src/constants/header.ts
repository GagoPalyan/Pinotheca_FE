import { IHeaderData } from '@/types';
import { PageUrls } from '@/types/path.types';

const HEADER_NAV_PAGES = [
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

const HEADER_DASHBOARD_PAGES = [
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

const BURGER_MENU_ICON_STYLES = [
  'rotate-45 translate-y-1.5',
  'opacity-0',
  '-rotate-45 -translate-y-1.5',
];

const BURGER_MENU_PAGES_LIST = [
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

const DEFAULT_HEADER_VALUE: IHeaderData = {
  carts: 0,
  likes: 0,
  nameFirstLater: '',
};

export {
  HEADER_NAV_PAGES,
  HEADER_DASHBOARD_PAGES,
  BURGER_MENU_ICON_STYLES,
  BURGER_MENU_PAGES_LIST,
  DEFAULT_HEADER_VALUE,
};
