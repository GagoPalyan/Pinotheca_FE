'use client';

import { Controller, type Control } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { SIZE_FIELD_ROWS } from '../../constants';
import type { TFiltersForm } from '../../types';
import { getSizeFormField } from '../../utils';
import RangeField from './RangeField';

interface ISizeFilter {
  control: Control<TFiltersForm>;
}

function SizeFilter({ control }: ISizeFilter) {
  const t = useTranslations('gallery.filters');

  return (
    <div className="flex flex-col gap-1">
      <h3 className="base-semibold text-gray-950">{t('size')}</h3>
      {SIZE_FIELD_ROWS.map((row) => (
        <div key={row.key} className="flex flex-col gap-1 not-last:border-b border-gray-200 pb-3">
          <span className="base-normal text-gray-950 w-16 shrink-0">{t(row.key)}</span>
          <div className="flex gap-2 w-full">
            {row.labels.map((bound) => {
              const name = getSizeFormField(row.key, bound);

              return (
                <Controller
                  key={name}
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <RangeField
                      name={name}
                      placeholder={t(bound)}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SizeFilter;
