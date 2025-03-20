import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="header__nav">
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/company-info">Company Info</Link></li>
        </ul>
      </nav>
      <div className="header__actions">
        {/* Use Link for navigation */}
        <Link to="/signin" className="btn sign-in">Sign In</Link>
        <Link to="/create-profile" className="btn register">Register</Link>
      </div>
    </header>
  );
};

export default Header;