import React from "react";
import "./Header.scss";
import logo from "../assets/logo.svg";

const menu = {
  left: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "RPG",
      url: "/rpg",
    },
    {
      label: "Arcade",
      url: "/arcade",
    },
    {
      label: "Brain Games",
      url: "/brain-games",
    },
  ],
  right: [
    {
      label: "Support",
      url: "/support",
    },
    {
      label: "Contact Us",
      url: "/contact-us",
    },
  ],
};

export const Header = ({open, toggleMenu}) => {
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
              {menu.left.map((item, i) => (
                <MenuItem key={i} item={item}/>
              ))}
            </ul>
          )}
          {menu && menu.right && (
            <ul className="menu-right">
              {menu.right.map((item, i) => (
                <MenuItem key={i} item={item}/>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={`mobileMenuIcon${open.toggleMenu ? ' active':''}`} onClick={() => toggleMenu(!open.toggleMenu)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="menu-mobile">
        <div className="mobile-btns">
          <div className="btn">Login</div>
          <div className="btn btn-cta">Sign Up</div>
        </div>
        <ul className="mobileMenu">
          {menu && menu.left.map((item, i) => (
            <MenuItem key={i} item={item}/>
          ))}
          {menu && menu.right.map((item, i) => (
            <MenuItem key={i} item={item}/>
          ))}
        </ul>
      </div>
    </header>
  );
};

const MenuItem = props => {
  return (
    <li onClick={() => window.location.href = props.item.url}>
      {props.item.label}
    </li>
  )
}