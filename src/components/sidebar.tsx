import { FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { GoBellFill, GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

const SideBarItems = [
  {
    icon: <GoHomeFill style={{ width: "100%", height: "100%" }} />,
    link: "/",
    title: "Home",
  },
  {
    icon: (
      <FaSearch style={{ width: "100%", height: "100%", padding: "2px" }} />
    ),
    link: "/search",
    title: "Explore",
  },
  {
    icon: <MdMail style={{ width: "100%", height: "100%" }} />,
    link: "/messages",
    title: "Messages",
  },
  {
    icon: <GoBellFill style={{ width: "100%", height: "100%" }} />,
    link: "/notifications",
    title: "Notifications",
  },
  {
    icon: (
      <IoBookmarkSharp
        style={{ width: "100%", height: "100%", padding: "0 2px" }}
      />
    ),
    link: "/bookmarks",
    title: "Bookmarks",
  },
];

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center px-4 py-2 gap-4 md:flex-[0.3] md:items-start sticky h-screen top-0 left-0">
      <FaXTwitter className="text-3xl text-primary" />
      <div className="flex-1 flex flex-col gap-2 w-full items-center">
        {SideBarItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center justify-center md:justify-start hover:bg-slate-900 rounded-lg w-full py-2 cursor-pointer"
          >
            <div className="h-8 w-8 flex items-center justify-center">
              {item.icon}
            </div>
            <div className="hidden md:flex">{item.title}</div>
          </div>
        ))}
        <div className="bg-[#1D9BF0] hidden md:block text-center cursor-pointer py-2 rounded-full w-full">
          Post
        </div>
        <div className="bg-[#1D9BF0] md:hidden text-center cursor-pointer py-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
          <BsStars />
        </div>
      </div>
      <div className="flex gap-2 items-center hover:bg-slate-900 p-1 rounded-lg w-full">
        <div>
          <Avatar>
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 hidden md:flex flex-col">
          <div className="font-bold">Gautam Bansal</div>
          <div className="text-muted-foreground text-sm">0xgautam_</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
