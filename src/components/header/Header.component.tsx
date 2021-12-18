import clsx from "clsx";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import Title from "../common/title/Title.component";
import Container from "../container/Container.component";

const ICON_CLASSES = "text-white w-8 h-8";

// const routes = [
//   {
//     label: "About me",
//     path: "/about",
//   },
//   {
//     label: "My skills",
//     path: "/skills",
//   },
//   {
//     label: "Personal projects",
//     path: "/projects",
//   },
//   {
//     label: "Contact with me",
//     path: "/contact",
//   },
// ];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(is => !is);
  };

  return (
    <>
      <div className="bg-black w-full fixed top-0 left-0 border-b-2 border-red-white z-20">
        <Container className="flex justify-between items-center h-14">
          <button>
            <AiOutlineHome className={ICON_CLASSES} />
          </button>

          <button onClick={toggleOpen}>
            <FaHamburger className={ICON_CLASSES} />
          </button>
        </Container>
      </div>

      <div
        className={clsx(
          "bg-black top-0 left-0 pt-14 w-full h-screen z-10 transform duration-200",
          `translate-x-${isOpen ? "0" : "full"}`,
        )}
      >
        <ul className="text-white flex justify-center items-center flex-col pt-8">
          <Title size="30" className="mb-6">
            About me
          </Title>
          <Title size="30" className="mb-6">
            My skills
          </Title>
          <Title size="30" className="mb-6">
            Personal projects
          </Title>
          <Title size="30" className="mb-6">
            Contact with me
          </Title>
        </ul>
      </div>
    </>
  );
};

export default Header;
