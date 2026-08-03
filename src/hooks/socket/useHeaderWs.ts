'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IHeaderData } from '@/types';
import Cookies from 'js-cookie';
import { socketEvent, socketUrl } from '@/types/socket.types';
import { BASE_URL } from '@/utils/api';
import { defaultHeaderValue } from '@/constants/header';

export function useUserInfo(initialData: IHeaderData | null) {
  const [data, setData] = useState<IHeaderData>(initialData ?? defaultHeaderValue);

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

  return data;
}
