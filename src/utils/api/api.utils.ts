import Cookies from 'js-cookie';
import { AuthPathEnum } from '@/types/auth.types';
import { PageUrls } from '@/types/path.enums';
import isDev from '@/utils/helpers/isDev.utils';
import getLanguage from '../helpers/getLanguage.utils';

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

export async function logoutClient() {
  await API.get(AuthPathEnum.LOGOUT);
  Object.keys(Cookies.get()).forEach((c) => Cookies.remove(c, { path: '/' }));
  window.location.href = PageUrls.HOME;
}

async function refreshTokenClient() {
  try {
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
  } catch {
    return null;
  }
}

async function getServerAccessToken(): Promise<string | undefined> {
  if (!IS_SERVER) return undefined;
  const { cookies } = require('next/headers') as typeof import('next/headers');

  const cookiesStore = await cookies();
  const token = cookiesStore.get('accessToken')?.value;

  return token;
}

type TErrorObject = { status: number; message: string };

async function serverFetch<T>(
  url: string,
  options: {
    params?: Record<string, unknown>;
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    retry?: boolean;
  } = {},
): Promise<T> {
  try {
    const token = await getServerAccessToken();
    const language = await getLanguage();

    const res = await fetch(buildUrl(url, options.params), {
      headers: {
        'Content-Type': 'application/json',
        'accept-language': language,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: options.cache ?? 'force-cache',
      next: {
        revalidate: options.revalidate,
        tags: options.tags,
      },
    });

    if (res.status === 401) {
      logoutClient();
      return Promise.reject({ status: 401, message: 'Unauthorized' } as TErrorObject);
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        message: data?.message ?? 'Server fetch failed',
      } as TErrorObject);
    }

    return data;
  } catch (err: any) {
    console.error('Server fetch error:', err);
    return Promise.reject({
      status: 500,
      message: err.message || 'Unknown server error',
    } as TErrorObject);
  }
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
  try {
    const requiresAuth = !noAuthRequired.some((p) => url.includes(p));
    const token = Cookies.get('accessToken');

    if (requiresAuth && !token) {
      logoutClient();
      return Promise.reject({ status: 401, message: 'No access token' } as TErrorObject);
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
      const refreshed = await refreshTokenClient();
      if (refreshed) return clientFetch<T>(url, { ...options, retry: true });

      logoutClient();
      return Promise.reject({ status: 401, message: 'Unauthorized' } as TErrorObject);
    }

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        message: data?.message ?? 'Client fetch failed',
      } as TErrorObject);
    }

    return data;
  } catch (err: any) {
    console.error('Client fetch error:', err);
    return Promise.reject({
      status: 500,
      message: err.message || 'Unknown client error',
    } as TErrorObject);
  }
}

type GetOptions = {
  params?: Record<string, unknown>;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
  next?: {
    revalidate?: number;
    tags?: string[];
  };
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
