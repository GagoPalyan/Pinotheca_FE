'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IHeaderData, IHeaderInfo } from '@/types';
import Cookies from 'js-cookie';
import { socketEvent, socketUrl } from '@/types/socket.types';
import { BASE_URL } from '@/utils/api';

export function useUserInfo(initialData?: IHeaderData) {
  const [headerInfo, setHeaderInfo] = useState<IHeaderInfo>({
    likes: initialData?.likes ?? 0,
    carts: initialData?.carts ?? 0,
  });

  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token) return;

    const url = `${BASE_URL}${socketUrl.USER_INFO}`;

    const socket = io(url, {
      transports: ['websocket'],
      auth: { token },
    });

    socket.on(socketEvent.on, () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on(socketEvent.likes, (likes: number) => {
      setHeaderInfo((prev) => ({
        ...prev,
        likes,
      }));
    });

    socket.on(socketEvent.carts, (cartCount: number) => {
      setHeaderInfo((prev) => ({
        ...prev,
        carts: cartCount,
      }));
    });

    socket.on(socketEvent.off, () => {
      console.log('Socket disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return {
    headerInfo,
  };
}
