import React from "react";
import MenuItem from "../MenuItem";
import NavLinks from "../NavLinks";
import menuData from "@/data/menu.json";
import { getImagePath } from "@/utils";

const Header: React.FC = () => {
  const logo = getImagePath("logo.png");
  const mainMenuItems = menuData.slice(0, 6);
  const secondaryMenuItems = menuData.slice(6);

  return (
    <header className="header">
      <a href="/" className="header__home">
        <img src={logo} className="header__logo" alt="logo" />
      </a>
      <nav className="nav">
        <ul className="nav__list">
          {mainMenuItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </ul>
        <NavLinks links={secondaryMenuItems} />
      </nav>
    </header>
  );
};

export default Header;
