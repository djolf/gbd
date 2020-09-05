import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const menu = {
  left: [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "RPG",
      url: "#",
    },
    {
      label: "Arcade",
      url: "#",
    },
    {
      label: "Brain Games",
      url: "#",
    },
  ],
  right: [
    {
      label: "Support",
      url: "#",
    },
    {
      label: "Contact Us",
      url: "#",
    },
  ],
};

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu-desktop">
        <div className="login-btns">
          <div className="btn">Login</div>
          <div className="btn btn-cta">Sign Up</div>
        </div>
        <div className="menu">
          {menu && menu.left && (
            <ul className="menu-left">
              {menu.left.map((item) => (
                <li onClick={() => window.location.href = item.url}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
          {menu && menu.right && (
            <ul className="menu-right">
              {menu.right.map((item) => (
                <li onClick={() => window.location.href = item.url}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div class={`mobileMenuIcon${active ? ' active':''}`} onClick={() => setActive(!active)}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div className="menu-mobile">
        <div className="mobile-btns">
          <div className="btn">Login</div>
          <div className="btn btn-cta">Sign Up</div>
        </div>
        <ul className="mobileMenu">
          {menu && menu.left.map(item => (
            <li onClick={() => window.location.href = item.url}>
              {item.label}
            </li>
          ))}
          {menu && menu.right.map(item => (
            <li onClick={() => window.location.href = item.url}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
