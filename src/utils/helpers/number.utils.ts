function toDigitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

function clampNumber(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export { toDigitsOnly, clampNumber };
