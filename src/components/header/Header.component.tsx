import clsx from "clsx";
import { AiOutlineHome } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { useCallback } from "react";

import SocialLinks from "components/header/socialLinks/SocialLinks.component";
import Menu from "./menu/Menu.component";
import useToggle from "utilities/hooks/useToggle.hook";
import { useIsMobile } from "utilities/hooks/useIsMobile.hook";

const ICON_CLASSES = "text-white w-8 h-8";

const Header = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { isMobile } = useIsMobile();

  const toggleDesktop = useCallback(() => {
    !isMobile && toggleOpen();
  }, [isMobile]);

  return (
    <header>
      <div
        onMouseEnter={toggleDesktop}
        onMouseLeave={toggleDesktop}
        className={clsx(
          "bg-black w-full fixed top-0 left-0 border-b-2 border-white z-20 md:w-16 md:transition-width md:duration-200",
          isOpen && "md:w-80",
        )}
      >
        <div className="px-mobile-spacing flex justify-between items-center h-14 md:h-screen md:flex-col md:pt-8 md:items-baseline">
          <button>
            <AiOutlineHome className={ICON_CLASSES} />
          </button>

          <button onClick={toggleOpen} className="md:hidden">
            <FaHamburger className={ICON_CLASSES} />
          </button>

          {/* DESKTOP */}
          <Menu isOpen={isOpen} wrapperClassName="hidden md:block md:translate-x-0" />
          <SocialLinks />
        </div>
      </div>

      {/* MOBILE */}
      <Menu isOpen={isOpen} wrapperClassName="md:hidden" />
    </header>
  );
};

export default Header;
