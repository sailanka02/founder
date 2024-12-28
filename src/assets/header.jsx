import React from 'react';
import './header.css';

const Header = () => {
    return (
    <header className="header">
        <div className="header__logo">
            <img src="/path-to-logo.png" alt="Logo" className="logo" />
        </div>
        <nav className="header__nav">
            <ul className="nav__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      <div className="header__actions">
        <button className="btn sign-in">Sign In</button>
        <button className="btn register">Register</button>
      </div>
    </header>
    );
};

export default Header;