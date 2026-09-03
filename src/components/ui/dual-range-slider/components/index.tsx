'use client';

import { twMerge } from 'tailwind-merge';
import { RANGE_INPUT_CLASS } from '../constants';
import type { IDualRangeSlider } from '../types';

function DualRangeSlider({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
  step = 1,
  className,
}: IDualRangeSlider) {
  const range = max - min || 1;
  const left = ((valueMin - min) / range) * 100;
  const right = ((valueMax - min) / range) * 100;

  const handleMinChange = (next: number) => {
    onChange(Math.min(next, valueMax), valueMax);
  };

  const handleMaxChange = (next: number) => {
    onChange(valueMin, Math.max(next, valueMin));
  };

  return (
    <div className={twMerge('relative w-full h-8 flex items-center', className)}>
      <div className="absolute inset-x-0 h-2 rounded-full bg-primary-100" />
      <div
        className="absolute h-2 rounded-full bg-primary-200"
        style={{ left: `${left}%`, right: `${100 - right}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-1 h-5 rounded-sm bg-primary-500 pointer-events-none z-10"
        style={{ left: `calc(${left}% - 2px)` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-1 h-5 rounded-sm bg-primary-500 pointer-events-none z-10"
        style={{ left: `calc(${right}% - 2px)` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={valueMin}
        onChange={(e) => handleMinChange(Number(e.target.value))}
        className={RANGE_INPUT_CLASS}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={valueMax}
        onChange={(e) => handleMaxChange(Number(e.target.value))}
        className={RANGE_INPUT_CLASS}
      />
    </div>
  );
}

export default DualRangeSlider;
