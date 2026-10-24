import { PageUrls } from '@/types';

const PROTECTED_ROUTES = [PageUrls.FAVORITES, PageUrls.CART, PageUrls.PROFILE];

const AUTH_ROUTES = [
  PageUrls.LOGIN,
  PageUrls.REGISTER,
  PageUrls.MAGIC_LINK,
  PageUrls.FORGOT_PASSWORD,
  PageUrls.RESET_PASSWORD,
];

export { PROTECTED_ROUTES, AUTH_ROUTES };
