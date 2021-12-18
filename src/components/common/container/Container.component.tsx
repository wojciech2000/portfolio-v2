import React from "react";
import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => (
  <div className={clsx("px-mobile-spacing sm:px-24 w-full m-auto", className)}>{children}</div>
);

export default Container;
