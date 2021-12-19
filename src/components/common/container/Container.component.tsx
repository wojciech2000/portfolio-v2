import React from "react";
import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => (
  // spaceing from header positioned fixedly
  <div className="w-full m-auto pt-mobile-header md:mt-0 md:px-0 md:pl-desktop-header">
    {/* inner spaceing of content */}
    <div
      className={clsx(
        "px-mobile-spacing py-12 md:p-16 flex justify-center items-center",
        className,
      )}
    >
      {children}
    </div>
  </div>
);

export default Container;
