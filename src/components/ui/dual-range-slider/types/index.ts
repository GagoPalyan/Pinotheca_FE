interface IDualRangeSlider {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (min: number, max: number) => void;
  step?: number;
  className?: string;
}

export type { IDualRangeSlider };
