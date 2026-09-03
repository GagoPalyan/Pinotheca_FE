'use client';

import Button from '@/components/ui/button';

interface IActiveFilterChip {
  label: string;
  onRemove: () => void;
}

function ActiveFilterChip({ label, onRemove }: IActiveFilterChip) {
  return (
    <Button
      size="small"
      variant="tertiary"
      customClass="w-fit"
      handleClick={onRemove}
      appendIcon="x"
    >
      {label}
    </Button>
  );
}

export default ActiveFilterChip;
