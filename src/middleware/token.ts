import { AuthPathEnum, TResponseCookies, type TRequestCookies } from '@/types';
import { Token } from '@/types/token.types';
import { BASE_URL } from '@/utils/api';
import isDev from '@/utils/helpers/isDev.utils';
import { NextResponse } from 'next/server';

const getCookie = (cookies: TRequestCookies, key: Token) => cookies.get(key)?.value ?? null;

const getAccessToken = async (refreshToken: string): Promise<string | null> => {
  try {
    const res = await fetch(`${BASE_URL}${AuthPathEnum.REFRESH}`, {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const { accessToken } = await res.json();

    return accessToken;
  } catch {
    return null;
  }
};

const getToken = async (cookies: TRequestCookies) => {
  const info = {
    token: getCookie(cookies, Token.ACCESS),
    isRefreshed: false,
  };

  if (!info.token) {
    info.isRefreshed = true;
    const refreshToken = getCookie(cookies, Token.REFRESH);

    if (!refreshToken) return info;

    info.token = await getAccessToken(refreshToken);
  }

  return info;
};

const updateCookies = (cookies: TResponseCookies, token: string | null) => {
  if (!token) return Object.values(Token).forEach((key) => cookies.delete(key));

  const staging = !isDev();

  cookies.set(Token.ACCESS, token, {
    httpOnly: false,
    secure: staging,
    sameSite: staging ? 'none' : 'lax',
    path: '/',
    maxAge: 60 * 60 * 2,
  });
};

export { getToken, updateCookies };
