import React from "react";
import "./Header.css"; // For styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="app-name">My To Do List</h1>
      <div className="theme-toggle">
        {/* Optionally add a light/dark theme toggle here */}
      </div>
    </header>
  );
};

export default Header;
