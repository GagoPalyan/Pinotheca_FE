'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface IFiltersPanelContext {
  isOpen: boolean;
  minPrice: number;
  maxPrice: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const FiltersPanelContext = createContext<IFiltersPanelContext | null>(null);

export function FiltersPanelProvider({
  children,
  minPrice,
  maxPrice,
}: {
  children: ReactNode;
  minPrice: number;
  maxPrice: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <FiltersPanelContext.Provider value={{ isOpen, minPrice, maxPrice, open, close, toggle }}>
      {children}
    </FiltersPanelContext.Provider>
  );
}

export function useFiltersPanel() {
  const context = useContext(FiltersPanelContext);

  if (!context) throw new Error('useFiltersPanel must be used within FiltersPanelProvider');

  return context;
}
