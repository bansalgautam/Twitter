import { FaXTwitter } from "react-icons/fa6";
import { GoBell, GoBellFill, GoHome, GoHomeFill } from "react-icons/go";
import {
  IoBookmarkOutline,
  IoBookmarkSharp,
  IoMail,
  IoMailOutline,
  IoSearchOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { MdEdit } from "react-icons/md";

export const TwitterIcon = () => {
  return <FaXTwitter className="text-3xl cursor-pointer" />;
};

export const HomeIcon = ({ selected }: { selected: string }) => {
  return selected === "home" ? (
    <GoHomeFill style={{ width: "24px", height: "24px" }} />
  ) : (
    <GoHome style={{ width: "24px", height: "24px" }} />
  );
};

export const SearchIcon = ({ selected }: { selected: string }) => {
  return selected === "explore" ? (
    <IoSearchSharp style={{ width: "24px", height: "24px" }} />
  ) : (
    <IoSearchOutline style={{ width: "24px", height: "24px" }} />
  );
};

export const MailIcon = ({ selected }: { selected: string }) => {
  return selected === "messages" ? (
    <IoMail style={{ width: "24px", height: "24px" }} />
  ) : (
    <IoMailOutline style={{ width: "24px", height: "24px" }} />
  );
};

export const NotificationIcon = ({ selected }: { selected: string }) => {
  return selected === "notifications" ? (
    <GoBellFill style={{ width: "24px", height: "24px" }} />
  ) : (
    <GoBell style={{ width: "24px", height: "24px" }} />
  );
};

export const BookMarkIcon = ({ selected }: { selected: string }) => {
  return selected === "bookmarks" ? (
    <IoBookmarkSharp style={{ width: "24px", height: "24px" }} />
  ) : (
    <IoBookmarkOutline style={{ width: "24px", height: "24px" }} />
  );
};

export const WriteIcon = () => {
  return <MdEdit style={{ width: "24px", height: "24px" }} />;
};
