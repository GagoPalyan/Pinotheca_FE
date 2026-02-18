'use client';

import { carouselList } from '@/constants/carousel';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

function Carousel() {
  const [activeCarousel, setActiveCarousel] = useState(0);

  const changeCarouselTo = useCallback((index: number) => {
    setActiveCarousel(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prev) => {
        prev++;
        return prev >= carouselList.length ? 0 : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeCarousel]);

  return (
    <section className="w-full aspect-video flex items-center justify-center relative overflow-hidden">
      <div
        className="w-full h-full flex items-center justify-start transition-all duration-300"
        style={{ transform: `translateX(-${activeCarousel}00%)` }}
      >
        {carouselList.map((item) => {
          return <div key={item.id} className={twMerge('min-w-full h-full', item.color)}></div>;
        })}
      </div>
      <div className="w-full flex gap-2 items-center justify-center absolute bottom-2">
        {carouselList.map((_, index) => {
          return (
            <input
              name="carousel"
              key={index}
              value={index}
              type="radio"
              onClick={() => changeCarouselTo(index)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Carousel;
