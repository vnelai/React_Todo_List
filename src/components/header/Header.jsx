// Header.jsx
import React from "react";
import "./Header.css"; // For styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="app-name">My To-Do List</h1>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#tasks">Tasks</a>
        <a href="#add-task" className="add-task-btn">Add Task</a>
      </nav>
    </header>
  );
};

export default Header;
