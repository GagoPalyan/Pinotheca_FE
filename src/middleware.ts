import { NextRequest, NextResponse } from 'next/server';
import { PageUrls } from './types/path.enums';
import { refreshTokenServer } from './server/refresh-token';

const protectedRoutes = [PageUrls.FAVORITES, PageUrls.CART, PageUrls.PROFILE];

const authRoutes = [
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

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token)
    return NextResponse.redirect(new URL(PageUrls.LOGIN, req.url));

  if (authRoutes.some((route) => pathname.startsWith(route)) && token)
    return NextResponse.redirect(new URL(PageUrls.HOME, req.url));

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
