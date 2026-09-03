'use client';

import { Controller, type Control } from 'react-hook-form';
import { FILTER_GROUPS } from '../../constants';
import type { TFiltersForm } from '../../types';
import { toggleListItem } from '../../utils';
import FilterGroup from './FilterGroup';

interface IFilterGroups {
  control: Control<TFiltersForm>;
}

function FilterGroups({ control }: IFilterGroups) {
  return (
    <>
      {FILTER_GROUPS.map(({ key, options }) => (
        <Controller
          key={key}
          name={key}
          control={control}
          render={({ field }) => (
            <FilterGroup
              title={`gallery.filters.${key}`}
              options={options}
              selected={field.value}
              onToggle={(value) => field.onChange(toggleListItem(field.value, value))}
            />
          )}
        />
      ))}
    </>
  );
}

export default FilterGroups;
