import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.svg";

const menu = {
  contact: [
    {
      label: "Help Centre",
      url: "/help"
    },
    {
      label: "The Group",
      url: "/group"
    },
    {
      label: "Affiliates",
      url: "/affiliates"
    },
  ],
  information: [
    {
      label: "Terms & Conditions",
      url: "/terms-and-conditions"
    },
    {
      label: "Payment methods",
      url: "/payment-methods"
    },
    {
      label: "Bonus Terms",
      url: "/bonus-terms"
    },
    {
      label: "Responsible Gaming",
      url: "/responsible-gaming"
    },
  ]
}

export const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="footer-nav">
        <div className="title">Contact Us</div>
        {menu && menu.contact.map((item, i) => (
          <span key={i} className="menu-item" onClick={() => window.location.href = item.url}>{item.label}</span>
        ))}
      </div>
      <div className="footer-nav">
        <div className="title">Information</div>
        {menu && menu.information.map((item, i) => (
          <span key={i} className="menu-item" onClick={() => window.location.href = item.url}>{item.label}</span>
        ))}
      </div>
    </footer>
  )
}