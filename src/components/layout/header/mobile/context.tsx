'use client';

import type { IHeaderData } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface TMobileMenuContext {
  isOpen: boolean;
  info: IHeaderData;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const MobileMenuContext = createContext<TMobileMenuContext | null>(null);

export function MobileMenuProvider({ info, children }: { info: IHeaderData; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <MobileMenuContext.Provider value={{ isOpen, info, open, close, toggle }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);

  if (!context) throw new Error('useMobileMenu must be used within MobileMenuProvider');

  return context;
}
