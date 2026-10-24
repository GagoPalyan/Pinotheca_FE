import type { NextRequest, NextResponse } from 'next/server';

type TRequestCookies = NextRequest['cookies'];
type TResponseCookies = NextResponse['cookies'];

export type { TRequestCookies, TResponseCookies };
