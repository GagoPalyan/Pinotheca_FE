import { useTranslations } from 'next-intl';
import { TCheckbox } from '../types';

function Checkbox({ handleChange, value, label, disabled, errorMessage }: TCheckbox) {
  const t = useTranslations();

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          disabled={disabled}
          checked={value}
          onChange={handleChange}
          type="checkbox"
          className="size-5 accent-primary-300"
        />
        <span className="small-normal">{t(label)}</span>
      </label>
      {errorMessage && <span className="text-red-600 small-normal">{t(errorMessage)}</span>}
    </div>
  );
}

export default Checkbox;
