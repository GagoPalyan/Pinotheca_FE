'use client';

import { twMerge } from 'tailwind-merge';
import Icon from '@/components/shared/icon';
import type { IAccordionItem } from '../types';

interface IAccordionItemProps {
  item: IAccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: IAccordionItemProps) {
  return (
    <div className="w-full border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <span className="text-base font-semibold leading-6 text-[#383640]">{item.title}</span>
        <Icon
          name="plus"
          size={6}
          color="#5767f5"
          iconClass={twMerge('transition-transform shrink-0', isOpen && 'rotate-45')}
        />
      </button>
      <div
        className={twMerge(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden min-h-0">
          <p className="pt-2 base-normal text-gray-600 whitespace-pre-wrap">{item.content}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
