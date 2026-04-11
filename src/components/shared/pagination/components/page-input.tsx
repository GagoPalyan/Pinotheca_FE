'use client';

import type { TQueryParams } from '@/types/hooks.types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface IProps {
  page: number;
  totalPages: number;
  set: (query: TQueryParams) => void;
}

function PageInput({ totalPages, set }: IProps) {
  const t = useTranslations('common.pagination');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (isNaN(value)) return setInputValue('');
    const newValue = Math.max(1, Math.min(value, totalPages));
    setInputValue(newValue.toString());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) set({ page: String(inputValue) });
    setInputValue('');
  };

  return (
    <form className="flex items-center justify-center max-md:gap-1 gap-2" onSubmit={handleSubmit}>
      <span className="base-normal text-gray-950">{t('go-to')}</span>
      <input
        name="goToPage"
        className="w-16 h-8 px-2 bg-white rounded-sm border text-gray-950 border-gray-400 outline-none"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default PageInput;
