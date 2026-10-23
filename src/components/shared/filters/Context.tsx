'use client';

import type { TFiltersMeta } from '@/components/views/gallery';
import { createContext, useContext, useState, ReactNode } from 'react';

interface IFiltersPanelContext {
  isOpen: boolean;
  filters: TFiltersMeta;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const FiltersPanelContext = createContext<IFiltersPanelContext | null>(null);

export function FiltersPanelProvider({
  children,
  filters,
}: {
  children: ReactNode;
  filters: TFiltersMeta;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <FiltersPanelContext.Provider value={{ isOpen, filters, open, close, toggle }}>
      {children}
    </FiltersPanelContext.Provider>
  );
}

export function useFiltersPanel() {
  const context = useContext(FiltersPanelContext);

  if (!context) throw new Error('useFiltersPanel must be used within FiltersPanelProvider');

  return context;
}
