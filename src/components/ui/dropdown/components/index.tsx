'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { IDropdownProps } from '../types';
import DropdownTrigger from './trigger';
import DropdownList from './list';

export default function Dropdown<T>({
  value,
  placeholder = '',
  list,
  prependIcon,
  onSelect,
  labelValue = 'label',
  customClass = '',
}: IDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (value: T) => {
    onSelect(value);
    setOpen(false);
  };

  const selectedValue = useMemo(() => list.find((item) => item.value === value), [value, list]);

  return (
    <div ref={ref} className="relative">
      <DropdownTrigger
        open={open}
        setOpen={setOpen}
        label={selectedValue?.[labelValue] as string | undefined}
        prependIcon={prependIcon}
        placeholder={placeholder}
        customClass={customClass}
      />

      {open && <DropdownList value={value} list={list} onSelect={handleSelect} />}
    </div>
  );
}
