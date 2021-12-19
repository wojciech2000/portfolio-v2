import clsx from "clsx";
import React, { ReactNode } from "react";

type Sizes = "16" | "20" | "24";
export type Colors = "black" | "white" | "secondary";

interface ITitleProps {
  size?: Sizes;
  color?: Colors;
  className?: string;
  children: ReactNode;
}

const Text: React.FC<ITitleProps> = ({ size = "16", color = "white", className, children }) => (
  <p
    className={clsx(
      `text-${color}`,
      {
        "text-base": size === "16",
        "text-xl": size === "20",
        "text-2xl md:text-3xl": size === "24",
      },
      className,
    )}
  >
    {children}
  </p>
);

export default Text;
