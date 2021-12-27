import React from "react";
import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => (
  // spaceing from header positioned fixedly
  <div className="absolute z-10 w-full h-screen m-auto pt-mobile-header md:pt-0 md:px-0 md:pl-desktop-header">
    {/* inner spaceing of content */}
    <div
      className={clsx(
        "h-full px-mobile-spacing py-12 flex justify-center items-baseline md:items-center md:py-24 md:px-16",
        className,
      )}
    >
      {children}
    </div>
  </div>
);

export default Container;
