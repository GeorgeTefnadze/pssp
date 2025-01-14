import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-[104px] w-screen flex justify-between items-center border-b border-borderColor py-7 px-12">
      <div className="logoWrapper w-[160px]">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="menu text-primaryText">
        <ul className="menuList flex gap-8">
          <li className="menuListItem">
            <a className="menuListLink" href="/#main">
              მთავარი
            </a>
          </li>
          <li className="menuListItem">
            <a className="menuListLink" href="/#info">
              ჩვენს შესახებ
            </a>
          </li>
          <li className="menuListItem">
            <a className="menuListLink" href="/projects">
              ნამუშევრები
            </a>
          </li>
          <li className="menuListItem">
            <a className="menuListLink" href="/#contact">
              კონტაქტი
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
