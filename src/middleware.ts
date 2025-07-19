import { NextRequest, NextResponse } from 'next/server';
import { PageUrls } from './types/path.enums';

const protectedRoutes = ['/dashboard', '/profile', '/settings'];
const authRoutes = [
  PageUrls.LOGIN,
  PageUrls.REGISTER,
  PageUrls.MAGIC_LINK,
  PageUrls.FORGOT_PASSWORD,
  PageUrls.RESET_PASSWORD,
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get('accessToken')?.value;
  const refreshToken = req.cookies.get('refreshToken')?.value;
  const token = accessToken || refreshToken;

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL(PageUrls.LOGIN, req.url));
  }

  if (authRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL(PageUrls.HOME, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/magic-link',
  ],
};
