import { useState } from "react";

export default (defaultValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue(currentValue => (typeof value === "boolean" ? value : !currentValue));
  };

  return [value, toggleValue];
};
