'use client';

import Icon from '@/components/shared/icon';
import { twMerge } from 'tailwind-merge';
import type { IMultiselectListProps } from '../types';

function MultiselectList<T>({
  value,
  list,
  onToggle,
  dropdownPosition = 'bottom',
}: IMultiselectListProps<T>) {
  const dropdownClass = dropdownPosition === 'bottom' ? 'mt-1' : 'bottom-full mb-1';

  return (
    <div
      className={twMerge(
        'absolute z-30 w-full rounded-sm bg-white shadow-lg max-h-40 overflow-y-auto',
        dropdownClass,
      )}
    >
      {list.map((item, idx) => {
        const isSelected = value.includes(item.value);

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onToggle(item.value)}
            className={twMerge(
              'cursor-pointer duration-200 hover:bg-primary-100 transition-all w-full px-2 py-1 flex items-center justify-between gap-2',
              isSelected && 'bg-primary-50',
            )}
          >
            <div className="flex items-center gap-2">
              {item.icon && <Icon name={item.icon} size={5} />}
              <span className="base-normal">{item.label}</span>
            </div>
            <span className="size-5 shrink-0 flex items-center justify-center">
              {isSelected && <Icon name="check" size={4} color="var(--color-primary-600)" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default MultiselectList;
