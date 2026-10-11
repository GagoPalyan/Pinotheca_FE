import type { TQueryParams } from '@/types/hooks.types';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const setQueryParams = useCallback(
    (query: TQueryParams) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(query).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          params.delete(key);
          value.forEach((v) => params.append(key, v));
          if (value.length === 0) params.delete(key);
        } else if (value !== undefined && value !== '') {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      router.replace(`${pathname}?${params.toString()}`);
    },
    [router, searchParams, pathname],
  );

  return setQueryParams;
}

export default useQueryParams;
