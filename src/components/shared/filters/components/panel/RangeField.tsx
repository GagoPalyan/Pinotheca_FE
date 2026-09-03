'use client';

import { toDigitsOnly } from '@/utils/helpers';

interface IRangeField {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function RangeField({ name, placeholder, value, onChange }: IRangeField) {
  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <div className="flex items-center border rounded-sm h-11 w-full px-3 border-gray-400">
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(toDigitsOnly(e.target.value))}
          className="text-normal text-gray-950 outline-none border-none w-full h-full rounded-sm"
        />
      </div>
    </div>
  );
}

export default RangeField;
