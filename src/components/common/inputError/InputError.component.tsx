import React from "react";

import Text from "components/common/text/Text.component";
import clsx from "clsx";

interface IInputError {
  errorMessage?: string;
  className?: string;
}

const InputError: React.FC<IInputError> = ({ errorMessage, className }) => (
  <Text size="12" color="error" className={clsx("absolute bottom-1 left-0", className)}>
    {errorMessage}
  </Text>
);

export default InputError;
