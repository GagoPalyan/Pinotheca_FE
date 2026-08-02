import { IHeaderInfo } from '@/types';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useProfileWebSocket(initialData: IHeaderInfo, url: string) {
  const [headerInfo, setHeaderInfo] = useState<IHeaderInfo>(initialData);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      try {
        const update: IHeaderInfo = JSON.parse(event.data);

        setHeaderInfo((prev) => ({
          ...prev,
          ...update,
        }));
      } catch (error) {
        console.error('Invalid WebSocket message:', error);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
      socketRef.current = null;
    };
  }, [url]);

  const updateLikes = useCallback((likes: number) => {
    setHeaderInfo((prev) => ({
      ...prev,
      likes,
    }));
  }, []);

  const updateOrders = useCallback((orders: number) => {
    setHeaderInfo((prev) => ({
      ...prev,
      orders,
    }));
  }, []);

  const send = useCallback((data: unknown) => {
    if (socketRef.current?.readyState !== WebSocket.OPEN) {
      return;
    }

    socketRef.current.send(JSON.stringify(data));
  }, []);

  return {
    headerInfo,
    updateLikes,
    updateOrders,
    send,
  };
}
