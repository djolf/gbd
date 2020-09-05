import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";

const menu = {
  contact: [
    {
      label: "Help Centre",
      url: "#"
    },
    {
      label: "The Group",
      url: "#"
    },
    {
      label: "Affiliates",
      url: "#"
    },
  ],
  information: [
    {
      label: "Terms & Conditions",
      url: "#"
    },
    {
      label: "Payment methods",
      url: "#"
    },
    {
      label: "Bonus Terms",
      url: "#"
    },
    {
      label: "Responsible Gaming",
      url: "#"
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
        {menu && menu.contact.map(item => (
          <span className="menu-item" onClick={() => window.location.href = item.url}>{item.label}</span>
        ))}
      </div>
      <div className="footer-nav">
        <div className="title">Information</div>
        {menu && menu.information.map(item => (
          <span className="menu-item" onClick={() => window.location.href = item.url}>{item.label}</span>
        ))}
      </div>
    </footer>
  )
}