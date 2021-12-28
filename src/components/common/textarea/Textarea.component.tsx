import React, { TextareaHTMLAttributes } from "react";

import Text from "components/common/text/Text.component";
import { IInputTypeProps } from "components/common/input/Input.component";
import InputError from "components/common/inputError/InputError.component";
import clsx from "clsx";

type ITextareaProps = IInputTypeProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<ITextareaProps> = ({ label, error, name, register, ...props }) => (
  <div className="relative flex-1 flex flex-col">
    <label htmlFor={name}>
      <Text size="20" className="mb-2">
        {label}
      </Text>
    </label>

    <textarea
      id={name}
      className={clsx(
        "w-full p-1.5 rounded-md border border-black flex-1 md:flex-auto  resize-none md:resize-y",
        {
          "border-error": error,
        },
      )}
      {...register}
      {...props}
    />

    <InputError errorMessage={error?.message} className="-bottom-5" />
  </div>
);

export default Textarea;
