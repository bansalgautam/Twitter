import { FaSearch } from "react-icons/fa";
import { GoBellFill, GoHomeFill } from "react-icons/go";
import { IoBookmarkSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const FooterItems = [
  {
    icon: <GoHomeFill style={{ width: "100%", height: "100%" }} />,
    link: "/",
  },
  {
    icon: <FaSearch style={{ width: "100%", height: "100%", padding: "2px" }} />,
    link: "/search",
  },
  {
    icon: <MdMail style={{ width: "100%", height: "100%" }} />,
    link: "/messages",
  },
  {
    icon: <GoBellFill style={{ width: "100%", height: "100%" }} />,
    link: "/notifications",
  },
  {
    icon: <IoBookmarkSharp style={{ width: "100%", height: "100%", padding: "0 2px" }} />,
    link: "/bookmarks",
  },
];

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 sm:hidden flex items-center justify-between w-full py-2 px-2 border-t-2">
      {FooterItems.map((item, index) => (
        <div
          key={index}
          className="h-[24px] w-[24px] flex items-center justify-center"
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
