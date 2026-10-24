'use client';

import { Controller, type Control } from 'react-hook-form';
import { FILTER_GROUPS } from '../../constants';
import type { TFiltersForm } from '../../types';
import { toggleListItem } from '../../utils';
import FilterMultiselect from './FilterMultiselect';

interface IFiltersList {
  control: Control<TFiltersForm>;
}

function FiltersList({ control }: IFiltersList) {
  return (
    <>
      {FILTER_GROUPS.map(({ key, options }) => (
        <Controller
          key={key}
          name={key}
          control={control}
          render={({ field }) => (
            <FilterMultiselect
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

export default FiltersList;
