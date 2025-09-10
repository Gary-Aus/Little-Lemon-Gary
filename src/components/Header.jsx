import React from "react";
import { Link, NavLink } from "react-router-dom";

import LogoPng from "../assets/LogoNew.png";

export default function Header() {
  // console.log("Logo path:", LogoIcon); // 查看控制台输出

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <img src={LogoPng} alt="Little Lemon Logo" className="logo" />
          <span className="title">Little Lemon</span>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Booking">Booking</NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
