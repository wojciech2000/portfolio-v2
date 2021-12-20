import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";

import Text from "components/common/text/Text.component";
import InputError from "components/common/inputError/InputError.component";

export interface IInputTypeProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

type IInputProps = IInputTypeProps & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({
  label,
  error,
  type = "text",
  name,
  register,
  ...props
}) => (
  <div className="input-wrapper">
    <label htmlFor={name} className="block mb-2">
      <Text size="20">{label}</Text>
    </label>

    <input
      type={type}
      id={name}
      className={clsx("w-full p-1.5 rounded-md border border-black md:w-1/3", {
        "border-error": error,
      })}
      {...register}
      {...props}
    />

    <InputError errorMessage={error?.message} />
  </div>
);

export default Input;
