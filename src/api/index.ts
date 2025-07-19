import { AuthPathEnum } from '@/types/auth.types';
import { PageUrls } from '@/types/path.enums';
import isDev from '@/utils/helpers/isDev.utils';
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const serverUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const noAuthRequired = [
      AuthPathEnum.REGISTER,
      AuthPathEnum.MAGIC_LINK,
      AuthPathEnum.LOGIN,
      AuthPathEnum.FORGOT_PASSWORD,
      AuthPathEnum.RESET_PASSWORD,
      AuthPathEnum.REFRESH,
    ];

    if (noAuthRequired.some((path) => config.url?.includes(path))) {
      return config;
    }

    const accessToken = Cookies.get('accessToken');

    if (!accessToken) {
      toast.error('Session expired or not authenticated. Please log in.');
      handleLogout();
      return Promise.reject(new Error('Access token is missing'));
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async(error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (!originalRequest) {
      return Promise.reject(error);
    }

    const isUnauthorized = error.response?.status === 401;

    if (isUnauthorized && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { accessToken } = await axios
          .get(AuthPathEnum.REFRESH, {
            baseURL: serverUrl,
          })
          .then((res) => res.data);

        if (!accessToken) {
          throw new Error('New access token is missing.');
        }

        Cookies.set('accessToken', accessToken, {
          secure: !isDev(),
          sameSite: 'Strict',
        });

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch {
        toast.error('Session expired. Please log in again.');
        handleLogout();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

function handleLogout() {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName, { path: '/' });
  });

  window.location.href = PageUrls.HOME;
}

export const API = {
  async get<DataType>(url: string, params?: Record<string, unknown> | null) {
    const res = await axiosInstance.get<DataType>(url, { params }).then((res) => res.data);
    return res;
  },

  async post<DataType>(url: string, body?: object, config?: AxiosRequestConfig) {
    const res = await axiosInstance.post<DataType>(url, body, config).then((res) => res.data);
    return res;
  },

  async patch<DataType>(url: string, body?: object, config?: AxiosRequestConfig) {
    const res = await axiosInstance.patch<DataType>(url, body, config).then((res) => res.data);
    return res;
  },

  async put<DataType>(url: string, body?: object, config?: AxiosRequestConfig) {
    const res = await axiosInstance.put<DataType>(url, body, config).then((res) => res.data);
    return res;
  },

  async delete<DataType>(url: string, config?: AxiosRequestConfig) {
    const res = await axiosInstance.delete<DataType>(url, config).then((res) => res.data);
    return res;
  },
};
