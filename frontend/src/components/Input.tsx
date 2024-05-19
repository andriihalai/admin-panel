import { ChangeEventHandler } from "react";

interface IInput {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
  value: number | string | undefined;
  min?: number;
  isRequired?: boolean;
  maxLength?: number;
}

export default function Input({
  title,
  type,
  id,
  name,
  placeholder,
  value,
  handleInput,
  min,
  isRequired,
  maxLength,
}: IInput) {
  return (
    <fieldset className="form-fieldset">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        className="form-input"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        min={min}
        onChange={handleInput}
        {...(isRequired ? { required: true } : {})}
        maxLength={maxLength}
      />
    </fieldset>
  );
}
