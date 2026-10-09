'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { IAccordion } from '../types';
import AccordionItem from './AccordionItem';

function Accordion({ items, customClass }: IAccordion) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={twMerge('w-full flex flex-col', customClass)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}

export default Accordion;
