import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Actions } from "@/lib/features";

const Tweet = () => {
  return (
    <div className="flex gap-2 p-2 px-4 border-y-[1px]">
      {/* Avatar */}
      <div>
        <Avatar>
          <AvatarFallback>GB</AvatarFallback>
        </Avatar>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Account Details */}
        <div className="flex gap-2 items-center">
          <div>Gautam Bansal</div>
          <div className="text-muted-foreground text-sm">@gautam_18_</div>
          <div className="text-muted-foreground text-sm">·</div>
          <div className="text-muted-foreground text-sm">2h</div>
        </div>

        {/* Tweet */}
        <div className="flex flex-col">
          {/* Tweet Content */}
          <div className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
            corrupti sint non quod accusamus vel ea, laudantium iusto, soluta
            reiciendis earum molestias ullam sapiente unde? Iure excepturi vel
            unde assumenda.
          </div>
          {/* Tweet Media */}
          <Image
            src="https://placehold.co/900x450/png"
            alt="tweet media"
            height={150}
            width={150}
            className="w-full object-cover rounded-2xl my-4"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center text-muted-foreground">
          {Actions.map((action, index) => (
            <div
              key={index}
              className="flex gap-2 items-center cursor-pointer hover:text-foreground"
            >
              <action.icon />
              {action.name !== "bookmark" && <div>100</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
