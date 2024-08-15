import React from "react";

interface MenuItemProps {
  title: string;
  href: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, href, active = false }) => {
  return (
    <li className="nav__item">
      <a className={`nav__link ${active ? "nav__current" : ""}`} href={href}>
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
