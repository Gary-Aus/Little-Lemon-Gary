import React from "react";
import LogoPng from "../assets/LogoNew.png";

function Footer() {
  return (
    <footer className="footer">
      {/* 左侧 Logo 和简介 */}
      <div className="footer-section">
        <img src={LogoPng} alt="Little Lemon Logo" className="footer-logo" />
        <p className="footer-text">
          Little Lemon is a family-owned Mediterranean restaurant focused on
          traditional recipes served with a modern twist.
        </p>
      </div>

      {/* 中间导航 */}
      <div className="footer-section">
        <h4 className="footer-title">Navigation</h4>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/booking">Booking</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* 右侧 社交/版权 */}
      <div className="footer-section">
        <h4 className="footer-title">Follow Us</h4>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <p className="footer-copy">
          &copy; 2025 Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
