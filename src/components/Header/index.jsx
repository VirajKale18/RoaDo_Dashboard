import React from "react";
import { Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Text size="xl" as="p" className="!font-montserrat">
        Dashboard
      </Text>
      <div className="flex items-center gap-3 rounded-[16px] bg-white-A700 p-1.5 shadow-xs">
        <a href="#">
          <Img src="images/img_search.svg" alt="search" className="h-[20px] w-[20px]" />
        </a>
        <div className="h-[16px] w-px bg-gray-400" />
        <a href="#">
          <Img src="images/img_occasionaly_used.svg" alt="occasionaly" className="h-[20px] w-[20px]" />
        </a>
        <div className="flex items-center gap-[11px]">
          <div className="h-[16px] w-px bg-gray-400" />
          <a href="#">
            <Img src="images/img_regular_used_icons.svg" alt="regularused" className="h-[20px] w-[20px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
