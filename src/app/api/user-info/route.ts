import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  revalidateTag('user-info', 'max');

  return NextResponse.json({
    success: true,
  });
}
