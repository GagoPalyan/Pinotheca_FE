'use server';

import { NextResponse } from 'next/server';

export async function logoutServer() {
  const response = NextResponse.json({ success: true });

  response.cookies.delete('accessToken');
  response.cookies.delete('refreshToken');

  return response;
}
