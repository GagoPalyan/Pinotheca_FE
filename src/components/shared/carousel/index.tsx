'use client';

import { CAROUSEL_LIST } from '@/constants/carousel';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

function Carousel() {
  const [activeCarousel, setActiveCarousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prev) => {
        prev++;
        return prev >= CAROUSEL_LIST.length ? 0 : prev;
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
        {CAROUSEL_LIST.map((item) => (
          <div key={item.id} className={twMerge('min-w-full h-full', item.color)}></div>
        ))}
      </div>
      <div className="w-full flex gap-2 items-center justify-center absolute bottom-2">
        {CAROUSEL_LIST.map((_, index) => (
          <input
            name="carousel"
            key={index}
            value={index}
            type="radio"
            onClick={() => setActiveCarousel(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
