import { NextRequest, NextResponse } from 'next/server';
import { PageUrls } from './types/path.types';
import { refreshTokenServer } from './server/refresh-token';

const PROTECTED_ROUTES = [PageUrls.FAVORITES, PageUrls.CART, PageUrls.PROFILE];

const AUTH_ROUTES = [
  PageUrls.LOGIN,
  PageUrls.REGISTER,
  PageUrls.MAGIC_LINK,
  PageUrls.FORGOT_PASSWORD,
  PageUrls.RESET_PASSWORD,
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get('accessToken')?.value;
  const refreshToken = req.cookies.get('refreshToken')?.value;

  let response = NextResponse.next();

  if (!accessToken && refreshToken) response = await refreshTokenServer(refreshToken);

  const token = accessToken || refreshToken;

  if (token) {
    if (AUTH_ROUTES.some((route) => pathname.startsWith(route)))
      return NextResponse.redirect(new URL(PageUrls.HOME, req.url));
  } else {
    if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route)))
      return NextResponse.redirect(new URL(PageUrls.LOGIN, req.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/favorites',
    '/cart',
    '/profile',
    '/login',
    '/register',
    '/magic-link',
    '/forgot-password',
    '/reset-password',
  ],
};
