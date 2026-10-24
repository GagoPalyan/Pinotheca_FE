'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button';
import useFilters from '@/hooks/useFilters';
import { useFiltersPanel } from '../Context';
import { EMPTY_FILTERS_FORM } from '../../constants';
import type { TFiltersForm } from '../../types';
import FiltersPanelHeader from './Header';
import FiltersList from './List';
import PriceFilter from './PriceFilter';

function FiltersPanelContent() {
  const t = useTranslations();
  const { isOpen, close } = useFiltersPanel();
  const { values, setQueryParams } = useFilters();
  const panelRef = useRef<HTMLDivElement | null>(null);

  const { control, handleSubmit, reset, setValue, watch } = useForm<TFiltersForm>({
    defaultValues: values,
  });

  useEffect(() => {
    if (isOpen) reset(values);
  }, [isOpen, reset]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (!isOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const clickedToggle = target.closest('[data-filters-toggle]');
      const clickedInsidePanel = panelRef.current?.contains(target);

      if (!clickedInsidePanel && !clickedToggle) close();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen, close]);

  const onSubmit = (data: TFiltersForm) => {
    setQueryParams({ ...data, page: '1' });
    close();
  };

  const clearFilters = () => {
    reset(EMPTY_FILTERS_FORM);
  };

  return (
    <aside
      ref={panelRef}
      className={twMerge(
        'h-full w-xs absolute top-0 left-0 bg-white p-6 flex flex-col shadow-lg transform transition-transform duration-300 ease-in-out z-900',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <form className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
        <FiltersPanelHeader />

        <div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
          <PriceFilter
            filterKey="price"
            minValue={watch('priceMin')}
            maxValue={watch('priceMax')}
            onChange={(min, max) => {
              setValue('priceMin', min);
              setValue('priceMax', max);
            }}
          />

          <FiltersList control={control} />

          <PriceFilter
            filterKey="width"
            minValue={watch('widthMin')}
            maxValue={watch('widthMax')}
            onChange={(min, max) => {
              setValue('widthMin', min);
              setValue('widthMax', max);
            }}
          />
          <PriceFilter
            filterKey="height"
            minValue={watch('heightMin')}
            maxValue={watch('heightMax')}
            onChange={(min, max) => {
              setValue('heightMin', min);
              setValue('heightMax', max);
            }}
          />
        </div>

        <div className="pt-6 mt-auto flex items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            size="medium"
            customClass="w-fit rounded-lg"
            handleClick={clearFilters}
          >
            {t('gallery.filters.clear')}
          </Button>
          <Button type="submit" variant="primary" size="medium" customClass="rounded-lg flex-1">
            {t('gallery.filters.apply')}
          </Button>
        </div>
      </form>
    </aside>
  );
}

export default FiltersPanelContent;
