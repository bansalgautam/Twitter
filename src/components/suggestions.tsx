import { FaSearch } from "react-icons/fa";

const SuggestionBar = () => {
  return (
    <div className="hidden lg:flex flex-col p-2 flex-[0.3] sticky h-screen right-0 top-0 w-full">
      <div className="bg-[#17191C] p-2 w-full rounded-full text-muted-foreground flex gap-4 items-center">
        <FaSearch className="text-lg" />
        Search
      </div>
    </div>
  );
};

export default SuggestionBar;
