"use client";

import { features } from "@/lib/features";
import { useState } from "react";

const MobileFooter = () => {
  const [selected, setSelected] = useState<string>("home");
  return (
    <div className="fixed bottom-0 sm:hidden flex items-center justify-between w-full py-2 px-2 border-t-2">
      {features.map((item, index) => (
        <div
          key={index}
          className="h-[24px] w-[24px] flex items-center justify-center"
          onClick={() => setSelected(item.name)}
        >
          <item.icon selected={selected} />
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
