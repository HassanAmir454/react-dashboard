import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        🌟 Made with <span className="heart">❤️</span> by <strong>You</strong>
      </p>
      <p className="year">© {year} My React App</p>
    </footer>
  );
}

export default Footer;