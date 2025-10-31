import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left side: Logo */}
      <div className="header-left">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Center: Stylish Search Bar */}
      <div className="header-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>

      {/* Right side: Login + Menu */}
      <div className="header-right">
        <button className="login-btn">Log In</button>
        <div className="menu-container">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ⋮
          </button>
          {menuOpen && (
            <ul className="dropdown-menu">
               <li>My Profile</li>
  <li>Settings</li>
  <li>Notifications</li>
  <li>Dark Mode</li>
  <li>Log Out</li>g
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
