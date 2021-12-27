import React from "react";

import Text from "components/common/text/Text.component";

interface IInputError {
  errorMessage?: string;
}

const InputError: React.FC<IInputError> = ({ errorMessage }) => (
  <Text size="12" color="error" className="absolute bottom-1 left-0">
    {errorMessage}
  </Text>
);

export default InputError;
