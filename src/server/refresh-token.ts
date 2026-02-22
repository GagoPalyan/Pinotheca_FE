'use server';

import { AuthPathEnum } from '@/types/auth.types';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string;

const deleteCookies = (response: NextResponse) => {
  response.cookies.delete('accessToken');
  response.cookies.delete('refreshToken');
};

export async function refreshTokenServer(refreshToken: string) {
  const response = NextResponse.next();

  try {
    const res = await fetch(`${BASE_URL}${AuthPathEnum.REFRESH}`, {
      headers: { Cookie: `refreshToken=${refreshToken}` },
    });

    if (res.ok) {
      const { accessToken } = await res.json();

      response.cookies.set('accessToken', accessToken, {
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 2,
      });

      return response;
    } else {
      deleteCookies(response);
      return response;
    }
  } catch {
    deleteCookies(response);
    return response;
  }
}
