'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { IMultiselectProps } from '../types';
import MultiselectTrigger from './Trigger';
import MultiselectList from './List';
import { useTranslations } from 'next-intl';

function Multiselect<T>({
  value,
  placeholder = '',
  list,
  onToggle,
  dropdownPosition = 'bottom',
  chevronColor = 'black',
  customClass = '',
}: IMultiselectProps<T>) {
  const t = useTranslations();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selectedLabel = useMemo(
    () =>
      list
        .reduce<string[]>((labels, item) => {
          if (value.includes(item.value)) labels.push(t(item.label));

          return labels;
        }, [])
        .join(', '),
    [value, list],
  );

  return (
    <div ref={ref} className="relative">
      <MultiselectTrigger
        open={open}
        setOpen={setOpen}
        label={selectedLabel}
        placeholder={placeholder}
        customClass={customClass}
        chevronColor={chevronColor}
      />

      {open && (
        <MultiselectList
          value={value}
          list={list}
          onToggle={onToggle}
          dropdownPosition={dropdownPosition}
        />
      )}
    </div>
  );
}

export default Multiselect;
