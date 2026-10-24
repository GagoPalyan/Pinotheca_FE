import { AUTH_ROUTES, PROTECTED_ROUTES } from '@/constants/routes';
import { PageUrls } from '@/types';
import { type NextRequest, NextResponse } from 'next/server';

const middlewareRoute = (req: NextRequest, token: string | null) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = Boolean(token);

  const routes = isAuthenticated ? AUTH_ROUTES : PROTECTED_ROUTES;
  const matchesRoute = routes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (!matchesRoute) return NextResponse.next();

  const redirectTo = isAuthenticated ? PageUrls.HOME : PageUrls.LOGIN;
  const url = new URL(redirectTo, req.url);

  return NextResponse.redirect(url);
};

export { middlewareRoute };
