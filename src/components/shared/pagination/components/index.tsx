'use client';

import type { TMeta } from '@/types/global.types';
import Limit from './limit';
import ArrowButtons from './arrow-buttons';
import PaginationButton from './pagination-button';
import useArrowBtnActions from '../hooks/useArrowBtnActions';
import Dots from './dots';
import PageInput from './page-input';

export default function Pagination({ page, totalPages, limit }: TMeta) {
  const { increment, decrement, createPageURL, setQueryParams } = useArrowBtnActions(
    page,
    totalPages,
  );

  const pages = [];
  const start = Math.max(1, page - 1);
  const end = Math.min(totalPages, page + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 p-2">
      <div className="flex items-center justify-center max-md:gap-1 gap-2">
        <ArrowButtons disabled={page <= 1} side="left" handleClick={decrement} />

        {start > 1 && (
          <>
            <PaginationButton handleClick={() => createPageURL(1)}>1</PaginationButton>
            <Dots showIf={start > 2} />
          </>
        )}

        {pages.map((p) => (
          <PaginationButton key={p} handleClick={() => createPageURL(p)} disabled={p === page}>
            {p}
          </PaginationButton>
        ))}

        {end < totalPages && (
          <>
            <Dots showIf={end < totalPages - 1} />
            <PaginationButton handleClick={() => createPageURL(totalPages)}>
              {totalPages}
            </PaginationButton>
          </>
        )}

        <ArrowButtons disabled={page >= totalPages} side="right" handleClick={increment} />
      </div>

      <div className="flex items-center justify-center max-md:gap-1 gap-2">
        <Limit limit={limit} set={setQueryParams} />
        <PageInput page={page} totalPages={totalPages} set={setQueryParams} />
      </div>
    </div>
  );
}
