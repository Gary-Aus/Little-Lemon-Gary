import React from "react";
import { Link } from "react-router-dom";

import LogoPng from "../assets/LogoNew.png";

export default function Header() {
  // console.log("Logo path:", LogoIcon); // 查看控制台输出

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <img
            // src="logosdfsdf.png"
            // src="../assets/lo"
            src={LogoPng}
            alt="Little Lemon Logo"
            className="logo"
          />
          <span className="title">Little Lemon</span>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
        </nav>
      </div>
    </header>
  );
}
