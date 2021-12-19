import clsx from "clsx";
import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import Title from "components/common/title/Title.component";
import { routes as routesPaths } from "utilities/helpers/routes";

const ICON_CLASSES = "w-7 h-7";

const routes = [
  {
    label: "About me",
    path: routesPaths.about,
    icon: <RiUser3Line className={ICON_CLASSES} />,
  },
  {
    label: "My skills",
    path: routesPaths.skills,
    icon: <IoMdListBox className={ICON_CLASSES} />,
  },
  {
    label: "Personal projects",
    path: routesPaths.projects,
    icon: <BsCodeSlash className={ICON_CLASSES} />,
  },
  {
    label: "Contact with me",
    path: routesPaths.contact,
    icon: <AiOutlineMail className={ICON_CLASSES} />,
  },
];

interface IMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: React.FC<IMenuProps> = ({ isOpen, closeMenu }) => (
  <div
    className={clsx(
      "fixed bg-black top-0 left-0 border-t-2 border-white pt-16 w-full h-screen z-10 transform duration-200 mt-mobile-header overflow-hidden md:mt-0 md:static md:translate-x-0",
      `translate-x-${isOpen ? "0" : "full"}`,
    )}
  >
    <ul
      className={clsx(
        "text-white flex justify-center items-center flex-col pt-8 md:items-baseline",
      )}
    >
      {routes.map(({ label, path, icon }, index) => (
        <li key={index}>
          <Link to={path} onClick={closeMenu} className="flex items-center mb-6 relative md:mb-8">
            {icon}
            <Title className="pl-4 md:pl-12 md:absolute md:whitespace-nowrap">{label}</Title>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
