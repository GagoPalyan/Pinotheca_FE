import Cookies from 'js-cookie';
import { AuthPathEnum } from '@/types/auth.types';
import { PageUrls } from '@/types/path.types';
import isDev from '@/utils/helpers/isDev.utils';
import getLanguage from '../helpers/getLanguage.utils';
import { GetOptions, TErrorObject, TParams } from '@/types';
import { BASE_URL, AUTH_REQUIRED_URL, IS_SERVER } from './constants';
import { logoutServer } from '@/server/logout';

function buildUrl(url: string, params?: Record<string, unknown>) {
  if (!params) return `${BASE_URL}${url}`;

  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) sp.append(k, String(v));
  });

  return `${BASE_URL}${url}?${sp.toString()}`;
}

async function logoutClient() {
  await API.get(AuthPathEnum.LOGOUT);
  Object.keys(Cookies.get()).forEach((c) => Cookies.remove(c, { path: '/' }));
  window.location.href = PageUrls.HOME;
}

async function refreshTokenClient() {
  try {
    const res = await fetch(`${BASE_URL}${AuthPathEnum.REFRESH}`, { credentials: 'include' });

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

async function serverFetch<T>(
  url: string,
  options: {
    params?: TParams;
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
      cache: options.cache ?? 'no-cache',
      next: {
        revalidate: options.revalidate,
        tags: options.tags,
      },
    });

    if (res.status === 401) {
      logoutServer();
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
    params?: TParams;
    retry?: boolean;
  } = {},
): Promise<T> {
  try {
    const requiresAuth = AUTH_REQUIRED_URL.has(url);
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
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      cache: 'no-cache',
    });

    if (res.status === 401 && !options.retry) {
      const refreshed = await refreshTokenClient();
      if (refreshed) return clientFetch<T>(url, { ...options, retry: true });

      if (requiresAuth) {
        logoutClient();
        return Promise.reject({ status: 401, message: 'Unauthorized' } as TErrorObject);
      }
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

const API = {
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

export { logoutClient, API };
