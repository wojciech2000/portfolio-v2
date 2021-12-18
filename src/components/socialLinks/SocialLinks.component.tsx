import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";
import clsx from "clsx";
import useToggle from "utilities/hooks/useToggle.hook";

const ICON_CLASSES = "text-white w-10 h-10";
const socialMedias = [
  {
    Icon: <AiFillGithub className={ICON_CLASSES} />,
    link: "https://github.com/wojciech2000",
  },
  {
    Icon: <BsLinkedin className={ICON_CLASSES} />,
    link: "https://www.linkedin.com/in/wojciech-antonik-853868205/",
  },
];

const SocialLinks = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className="fixed bottom-0 right-mobile-spacing z-50">
      <div
        className={clsx(
          "duration-200 transform transition-transform",
          `translate-y-${isOpen ? "0" : "full"}`,
        )}
      >
        {socialMedias.map(({ Icon, link }, index, arr) => (
          <div key={index} className="flex flex-col justify-center items-center mb-2">
            <a href={link} target="_blank">
              <button className="mb-2">{Icon}</button>
            </a>

            <div className={clsx("w-0.5 bg-white", index === arr.length - 1 ? "h-20" : "h-8")} />
          </div>
        ))}
      </div>

      <button
        onClick={toggleOpen}
        className="absolute bottom-0 left-1/2 transform transition-transform translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full"
      >
        <HiChevronUp
          className={clsx(
            "text-2xl absolute top-0 left-1/2 transform -translate-x-1/2 duration-200",
            `rotate-${isOpen ? "180" : "0"}`,
          )}
        />
      </button>
    </div>
  );
};

export default SocialLinks;
