import React from "react";
import LeftMenuLink from "./elements/LeftMenuLink";

export default function LeftMenu() {
  return (
    <div className="LeftMenu left-0 top-0 h-screen w-[240px] fixed flex flex-col justify-end border-r border-borderColor">
      <LeftMenuLink title={"Web"} count={4} url={"/"} />
      <LeftMenuLink title={"Design"} count={2} url={"/"} />
    </div>
  );
}
