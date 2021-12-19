import clsx from "clsx";
import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import Title from "components/common/title/Title.component";

const ICON_CLASSES = "w-7 h-7";

const routes = [
  {
    label: "About me",
    path: "/about",
    icon: <RiUser3Line className={ICON_CLASSES} />,
  },
  {
    label: "My skills",
    path: "/skills",
    icon: <IoMdListBox className={ICON_CLASSES} />,
  },
  {
    label: "Personal projects",
    path: "/projects",
    icon: <BsCodeSlash className={ICON_CLASSES} />,
  },
  {
    label: "Contact with me",
    path: "/contact",
    icon: <AiOutlineMail className={ICON_CLASSES} />,
  },
];

interface IMenuProps {
  isOpen: boolean;
  wrapperClassName?: string;
}

const Menu: React.FC<IMenuProps> = ({ isOpen, wrapperClassName }) => (
  <div
    className={clsx(
      "fixed bg-black top-0 left-0 pt-24 w-full h-screen z-10 transform duration-200 overflow-hidden md:static",
      `translate-x-${isOpen ? "0" : "full"}`,
      wrapperClassName,
    )}
  >
    <ul
      className={clsx(
        "text-white flex justify-center items-center flex-col pt-8 md:items-baseline",
      )}
    >
      {routes.map(({ label, path, icon }, index) => (
        <li key={index}>
          <Link to={path} className="flex items-center mb-6 relative md:mb-8">
            {icon}
            <Title className="ml-4 md:ml-12 md:absolute md:whitespace-nowrap">{label}</Title>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
