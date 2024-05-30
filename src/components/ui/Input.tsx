import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
type InputProps = {
  register?: UseFormRegister<any>;
  error?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: any;
  disabled?: boolean;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
};
export const Input = ({
  register,
  error,
  name,
  value,
  disabled,
  placeholder,
  type,
}: InputProps) => {
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        className={` outline-none ${
          error ? "border-red-500" : ""
        } relative block w-full  border p-15 rounded-lg`}
        {...register(name)}
      ></input>
      {error && <p className="text-red-500 text-[16px]">*{error}</p>}
    </div>
  );
};
