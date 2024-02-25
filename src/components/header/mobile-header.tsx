"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FaXTwitter } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { TwitterIcon } from "@/lib/logos";
import { ModeToggle } from "../mode-toggle";

const MobileHeader = () => {
  const [selected, setSelected] = useState<"for-you" | "following">("for-you");
  return (
    <div className="flex flex-col bg-background sm:sticky top-0 sm:bg-transparent sm:backdrop-blur-md">
      {/* Logo and Avatar */}
      <div className="flex justify-between sm:hidden px-2 py-2 items-center">
        <div>
          <Avatar>
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>

      {/* For You & Following */}
      <div className="flex w-full border-b-2 py-4">
        <div
          className={cn(
            "flex-1 text-center cursor-pointer",
            selected === "for-you"
              ? "underline underline-offset-[20px] decoration-2 decoration-[#1D9BF0] text-foreground"
              : "text-muted-foreground"
          )}
          onClick={() => setSelected("for-you")}
        >
          For You
        </div>
        <div
          className={cn(
            "flex-1 text-center cursor-pointer",
            selected === "following"
              ? "underline underline-offset-[20px] decoration-2 decoration-[#1D9BF0] text-foreground"
              : "text-muted-foreground"
          )}
          onClick={() => setSelected("following")}
        >
          Following
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
