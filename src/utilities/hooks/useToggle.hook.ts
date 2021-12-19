import { useState, useEffect } from "react";
import { useIsMobile } from "./useIsMobile.hook";

export default (defaultValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue);
  const { isMobile } = useIsMobile();

  const toggleValue = (value?: boolean) => {
    setValue(currentValue => (typeof value === "boolean" ? value : !currentValue));
  };

  // reset state on resize between mobile and desktop
  useEffect(() => {
    setValue(defaultValue);
  }, [isMobile]);

  return [value, toggleValue];
};
