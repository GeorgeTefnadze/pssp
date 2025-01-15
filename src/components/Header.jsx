import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="z-10 fixed top-0 left-0 h-[104px] w-screen flex justify-between items-center border-b border-borderColor">
      <div className="logoWrapper w-[240px] p-12">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="menu flex-1 h-full flex justify-end items-center pr-12 text-primaryText backdrop-filter backdrop-blur bg-primaryBg bg-opacity-90">
        <ul className="menuList flex gap-8">
          <li className="menuListItem">
            <Link className="menuListLink" to={"/#main"}>
              მთავარი
            </Link>
          </li>
          <li className="menuListItem">
            <Link className="menuListLink" to={"/#info"}>
              ჩვენს შესახებ
            </Link>
          </li>
          <li className="menuListItem">
            <Link className="menuListLink" to={"/projects"}>
              ნამუშევრები
            </Link>
          </li>
          <li className="menuListItem">
            <Link className="menuListLink" to={"/#contact"}>
              კონტაქტი
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
