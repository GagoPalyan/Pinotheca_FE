'use client';

import Dropdown from '@/components/ui/dropdown';
import type { TQueryParams } from '@/types/hooks.types';
import { limits } from '../constants';

interface IProps {
  limit: number;
  set: (query: TQueryParams) => void;
}

function Limit({ limit, set }: IProps) {
  const handleSelect = (value: number) => {
    set({ limit: String(value) });
  };

  return <Dropdown customClass='h-8 px-2 bg-white rounded-sm border border-gray-400' labelValue="label" list={limits} value={limit} onSelect={handleSelect} />;
}

export default Limit;
