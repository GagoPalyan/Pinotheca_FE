'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IHeaderData } from '@/types';
import Cookies from 'js-cookie';
import { socketEvent, socketUrl } from '@/types/socket.types';
import { BASE_URL } from '@/utils/api';
import { DEFAULT_HEADER_VALUE } from '@/constants/header';

export function useUserInfo(initialData: IHeaderData | null) {
  const [data, setData] = useState<IHeaderData>(initialData ?? DEFAULT_HEADER_VALUE);

  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token) return;

    const url = `${BASE_URL}${socketUrl.USER_INFO}`;

    const socket = io(url, {
      transports: ['websocket'],
      auth: { token },
    });

    socket.on(socketEvent.likes, (likes: number) => {
      setData((prev) => ({ ...prev, likes }));
    });

    socket.on(socketEvent.carts, (carts: number) => {
      setData((prev) => ({ ...prev, carts }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (initialData) setData(initialData);
  }, [initialData]);

  return data;
}
