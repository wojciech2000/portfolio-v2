import { MdOutlineLaptopMac } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { GoTools } from "react-icons/go";

const ICON_CLASSES = "w-8 h-8 md:w-16 md:h-16";

export const skillsList = [
  {
    label: "Front-end",
    icon: <MdOutlineLaptopMac className={ICON_CLASSES} />,
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT",
      "REDUX",
      "STYLED-COMPONENTS",
      "TAILWIND",
      "JEST",
      "REACT-TEST.-LIB.",
    ],
  },
  {
    label: "Back-end",
    icon: <FaDatabase className={ICON_CLASSES} />,
    skills: [
      "NODE",
      "EXPRESS",
      "MYSQL",
      "POSTGRES",
      "MONGODB",
      "MONGOOSE",
      "TYPEORM",
      "GRAPHQL",
      "REST API",
    ],
  },
  {
    label: "Tools",
    icon: <GoTools className={ICON_CLASSES} />,
    skills: ["NPM/YARN", "FIGMA/ZEPLIN", "JIRA/TRELLO", "GIT"],
  },
];
