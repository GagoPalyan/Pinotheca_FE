'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { IHeaderData, IHeaderInfo } from '@/types';
import Cookies from 'js-cookie';
import { socketEvent, socketUrl } from '@/types/socket.types';

const token = Cookies.get('accessToken');
const SOCKET_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export function useUserInfo(initialData?: IHeaderData) {
  const [headerInfo, setHeaderInfo] = useState<IHeaderInfo>({
    likes: initialData?.likes ?? 0,
    orders: initialData?.orders ?? 0,
  });

  useEffect(() => {
    if (!token) return;

    const url = `${SOCKET_URL}${socketUrl.USER_INFO}`;

    console.log('Connecting to socket:', url);

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
        orders: cartCount,
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
