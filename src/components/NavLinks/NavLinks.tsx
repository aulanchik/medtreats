import React from "react";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLinks: React.FC<{ links: NavLinkProps[] }> = ({ links }) => {
  return (
    <div className="nav__ctn">
      {links.map((link, index) => (
        <a key={index} className="nav__link" href={link.href}>
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
