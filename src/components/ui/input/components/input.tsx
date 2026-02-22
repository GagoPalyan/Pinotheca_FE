import { IInput } from '../types';

function InputComponent({
  name,
  type,
  placeholder,
  disabled,
  ...props
}: IInput) {
  return (
    <input
      {...props}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="text-normal text-gray-950 outline-none border-none w-full h-full rounded-sm"
    />
  );
}

export default InputComponent;
