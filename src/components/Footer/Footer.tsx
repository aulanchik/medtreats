import React from "react";
import { getImagePath } from "@/utils";
import { SocialLink, FooterLink } from "./types";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import data from "@/data/footer.json";

const Footer: React.FC = (): JSX.Element => {
  const logo = getImagePath("/logo.png");
  const { column1, column2, socials } = data;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "instagram":
        return <FaInstagram size={20} />;
      case "twitter":
        return <FaTwitter size={20} />;
      case "facebook":
        return <FaFacebook size={20} />;
      default:
        return null;
    }
  };

  const renderNavLinks = (items: Array<FooterLink>) => {
    return items.map((item) => (
      <li key={item.key} className="footer__item footer__item--navlink">
        <a href={item.href}>{item.label}</a>
      </li>
    ));
  };

  const renderSocialLinks = (links: Array<SocialLink>) => {
    return links.map((link) => {
      const icon = link.platform.toLowerCase();
      return (
        <li key={link.key} className="footer__item footer__item--social">
          <a key={link.key} href={link.href} target="_blank" rel="noreferrer">
            {icon && getIcon(icon)}
          </a>
        </li>
      );
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <ul className="footer__nav--col">{renderNavLinks(column1)}</ul>
          <ul className="footer__nav--col">{renderNavLinks(column2)}</ul>
          <ul className="footer__nav--socials">{renderSocialLinks(socials)}</ul>
        </div>
        <img src={logo} className="footer__logo" alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
