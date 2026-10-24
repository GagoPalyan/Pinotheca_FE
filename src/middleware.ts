import { NextRequest } from 'next/server';
import { getToken, updateCookies } from './middleware/token';
import { middlewareRoute } from './middleware/routes';

export async function middleware(req: NextRequest) {
  const { token, isRefreshed } = await getToken(req.cookies);

  const response = middlewareRoute(req, token);

  if (isRefreshed) updateCookies(response.cookies, token);

  return response;
}

export const config = {
  matcher: '/:path',
};
