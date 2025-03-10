// Footer.jsx
import React from "react";
import "./Footer.css";  // For styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024-2025 Virginia Nelai.</p>
      <p>All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/virginianelai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://VirginiaNelai.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="https://github.com/vnelai" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
