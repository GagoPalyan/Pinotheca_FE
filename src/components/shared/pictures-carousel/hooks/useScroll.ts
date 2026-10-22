'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollSide } from '../types';

function useScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return;

    setCanScrollLeft(node.scrollLeft > 0);
    setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    updateScrollButtons();

    node.addEventListener('scroll', updateScrollButtons, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(node);

    return () => {
      node.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [updateScrollButtons]);

  const scroll = useCallback((direction: ScrollSide) => {
    const AMOUNT = 384;

    scrollerRef.current?.scrollBy({
      left: direction === ScrollSide.LEFT ? -AMOUNT : AMOUNT,
      behavior: 'smooth',
    });
  }, []);

  return {
    scrollerRef,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
}

export default useScroll;
