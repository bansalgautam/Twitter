"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { features } from "@/lib/features";
import { useState } from "react";
import { TwitterIcon, WriteIcon } from "@/lib/logos";
import { Card } from "../ui/card";

const Sidebar = () => {
  const [selected, setSelected] = useState<string>("home");
  return (
    <div className="hidden sm:flex flex-col items-center px-4 py-4 gap-4 md:flex-[0.3] md:items-start sticky h-screen top-0 left-0">
      <div className="w-9 flex justify-center">
        <TwitterIcon />
      </div>
      <div className="flex-1 flex flex-col gap-2 w-full items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center justify-center md:justify-start rounded-lg w-full py-2 cursor-pointer"
            onClick={() => {
              setSelected(item.name);
            }}
          >
            <div className="h-9 w-9 flex items-center justify-center">
              <item.icon selected={selected} />
            </div>
            <div className="hidden md:flex capitalize">{item.name}</div>
          </div>
        ))}
        <div className="bg-[#1D9BF0] hidden md:block text-center cursor-pointer py-2 rounded-full w-full">
          Post
        </div>
        <div className="bg-[#1D9BF0] md:hidden text-center cursor-pointer py-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
          <WriteIcon />
        </div>
      </div>
      <Card className="flex gap-2 items-center p-1 rounded-lg w-full border-none">
        <div>
          <Avatar>
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 hidden md:flex flex-col">
          <div className="font-bold">Gautam Bansal</div>
          <div className="text-muted-foreground text-sm">@gautam_18_</div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
