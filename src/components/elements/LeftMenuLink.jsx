import React from "react";
import { Link } from "react-router-dom";

export default function LeftMenuLink(props) {
  return (
    <Link
      to={props.url}
      className="flex text-secondaryText justify-between p-8 border-t border-borderColor hover:bg-hoverBg duration-200"
    >
      <p>{props.title}</p>
      <p>[{props.count}]</p>
    </Link>
  );
}
