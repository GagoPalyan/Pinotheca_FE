import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { AuthPathEnum } from '@/types/auth.types';
import { PageUrls } from '@/types/path.enums';
import isDev from '@/utils/helpers/isDev.utils';

type RequestCache =
  | 'default'
  | 'no-store'
  | 'reload'
  | 'no-cache'
  | 'force-cache'
  | 'only-if-cached';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string;
const IS_SERVER = typeof window === 'undefined';

const noAuthRequired = [
  AuthPathEnum.REGISTER,
  AuthPathEnum.LOGIN,
  AuthPathEnum.MAGIC_LINK,
  AuthPathEnum.FORGOT_PASSWORD,
  AuthPathEnum.RESET_PASSWORD,
  AuthPathEnum.REFRESH,
];

function buildUrl(url: string, params?: Record<string, unknown>) {
  if (!params) return `${BASE_URL}${url}`;

  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) sp.append(k, String(v));
  });

  return `${BASE_URL}${url}?${sp.toString()}`;
}

function logoutClient() {
  Object.keys(Cookies.get()).forEach((c) => Cookies.remove(c, { path: '/' }));
  window.location.href = PageUrls.HOME;
}

async function refreshTokenClient() {
  const res = await fetch(`${BASE_URL}${AuthPathEnum.REFRESH}`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Refresh failed');

  const { accessToken } = await res.json();

  Cookies.set('accessToken', accessToken, {
    secure: !isDev(),
    sameSite: 'Strict',
  });

  return accessToken;
}

async function getServerAccessToken(): Promise<string | undefined> {
  if (!IS_SERVER) return undefined;

  const { cookies } = require('next/headers') as typeof import('next/headers');
  return (await cookies()).get('accessToken')?.value;
}

async function serverFetch<T>(
  url: string,
  options: {
    params?: Record<string, unknown>;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
  } = {},
): Promise<T> {
  const token = await getServerAccessToken();

  const res = await fetch(buildUrl(url, options.params), {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    cache: options.cache ?? 'force-cache',
    next: {
      revalidate: options.revalidate,
      tags: options.tags,
    },
  });

  if (!res.ok) throw new Error(`Server fetch failed: ${res.status}`);

  return res.json();
}

async function clientFetch<T>(
  url: string,
  options: {
    method?: string;
    body?: unknown;
    params?: Record<string, unknown>;
    retry?: boolean;
  } = {},
): Promise<T> {
  const requiresAuth = !noAuthRequired.some((p) => url.includes(p));
  const token = Cookies.get('accessToken');

  if (requiresAuth && !token) {
    toast.error('Session expired. Please log in.');
    logoutClient();
    throw new Error('No access token');
  }

  const res = await fetch(buildUrl(url, options.params), {
    method: options.method ?? 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(requiresAuth && token && { Authorization: `Bearer ${token}` }),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (res.status === 401 && !options.retry && requiresAuth) {
    try {
      await refreshTokenClient();
      return clientFetch<T>(url, { ...options, retry: true });
    } catch {
      toast.error('Session expired. Please log in again.');
      logoutClient();
    }
  }

  if (!res.ok) {
    const errorMessage = await res.text();

    const error = JSON.parse(errorMessage);

    return error;
  }

  return res.json();
}

type GetOptions = {
  params?: Record<string, unknown>;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
};

export const API = {
  get<T>(url: string, options?: GetOptions) {
    return IS_SERVER
      ? serverFetch<T>(url, options)
      : clientFetch<T>(url, { params: options?.params });
  },

  post<T>(url: string, body?: unknown) {
    return clientFetch<T>(url, { method: 'POST', body });
  },

  put<T>(url: string, body?: unknown) {
    return clientFetch<T>(url, { method: 'PUT', body });
  },

  patch<T>(url: string, body?: unknown) {
    return clientFetch<T>(url, { method: 'PATCH', body });
  },

  delete<T>(url: string) {
    return clientFetch<T>(url, { method: 'DELETE' });
  },
};
