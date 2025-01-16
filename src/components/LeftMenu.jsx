import React from "react";
import LeftMenuLink from "./elements/LeftMenuLink";

export default function LeftMenu() {
  return (
    <div className="LeftMenu left-0 top-0 h-screen w-[240px] fixed flex-col justify-end border-r border-borderColor md:flex hidden">
      <LeftMenuLink title={"Web"} count={4} url={"1"} />
      <LeftMenuLink title={"Design"} count={2} url={"2"} />
    </div>
  );
}
