export type TCheckbox = {
  handleChange: () => void;
  value: boolean;
  label: string;
  disabled: boolean;
  errorMessage?: string;
};
