import React, { TextareaHTMLAttributes } from "react";

import Text from "components/common/text/Text.component";
import { IInputTypeProps } from "components/common/input/Input.component";
import InputError from "components/common/inputError/InputError.component";
import clsx from "clsx";

type ITextareaProps = IInputTypeProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<ITextareaProps> = ({ label, error, name, register, ...props }) => (
  <div className="input-wrapper">
    <label htmlFor={name} className="block mb-2">
      <Text size="20">{label}</Text>
    </label>

    <textarea
      id={name}
      className={clsx("w-full p-1.5 rounded-md border border-black", {
        "border-error": error,
      })}
      {...register}
      {...props}
    />

    <InputError errorMessage={error?.message} />
  </div>
);

export default Textarea;
