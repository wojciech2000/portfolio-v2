import clsx from "clsx";
import { AiOutlineHome } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { useCallback } from "react";

import SocialLinks from "components/header/socialLinks/SocialLinks.component";
import Menu from "./menu/Menu.component";
import useToggle from "utilities/hooks/useToggle.hook";
import { useIsMobile } from "utilities/hooks/useIsMobile.hook";
import { Link } from "react-router-dom";
import { routes } from "utilities/helpers/routes";

const ICON_CLASSES = "text-white w-8 h-8";

const Header = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { isMobile } = useIsMobile();

  const toggleDesktop = useCallback(() => {
    !isMobile && toggleOpen();
  }, [isMobile]);

  const closeMenu = () => {
    isMobile && toggleOpen(false);
  };

  return (
    <header
      onMouseEnter={toggleDesktop}
      onMouseLeave={toggleDesktop}
      className={clsx(
        "bg-black w-full fixed top-0 left-0 z-20 md:w-80 md:transition-width md:duration-200",
        !isOpen && "md:w-desktop-header",
      )}
    >
      <div className="px-mobile-spacing flex justify-between items-center h-mobile-header md:h-screen md:flex-col md:pt-8 md:items-baseline">
        <Link to={routes.home} onClick={closeMenu}>
          <button>
            <AiOutlineHome className={ICON_CLASSES} />
          </button>
        </Link>

        <button onClick={() => toggleOpen()} className="md:hidden">
          <FaHamburger className={ICON_CLASSES} />
        </button>

        <Menu isOpen={isOpen} closeMenu={closeMenu} />
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
