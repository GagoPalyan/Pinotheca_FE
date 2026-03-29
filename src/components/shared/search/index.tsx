'use client';

import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import useQueryParams from '@/hooks/useQueryParams';
import { useSearchParams } from 'next/navigation';
import Icon from '../icon';

function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get('search') ?? '';
  const [search, setSearch] = useState<string>(q);

  const setQueryParams = useQueryParams();
  const searchCallback = (search: string) => setQueryParams({ search });
  useDebounce(search, 300, searchCallback);

  return (
    <div className="bg-gray-100 w-3xs py-2 px-3 rounded-full flex items-center justify-between gap-1">
      <Icon name="search" size={5} />
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search"
        value={search}
        className="w-full base-normal bg-gray-100 text-gray-700 outline-none"
        onChange={({ target: t }) => setSearch(t.value)}
      />
      {search && <Icon name="x" size={5} iconClass="cursor-pointer" handleClick={() => setSearch('')} />}
    </div>
  );
}

export default Search;
