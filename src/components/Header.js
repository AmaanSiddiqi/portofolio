import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">My Portfolio</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
