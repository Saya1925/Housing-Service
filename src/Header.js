import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg'; // Update the import path
import './css/Header.css'; // Import your custom CSS file

const Header = () => {
  const buttons = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICE', path: '/MakeOffer' },
    { label: 'ABOUT US', path: '/About' },
    { label: 'LOG IN', path: '/Login' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          {buttons.map((button, index) => (
            <NavLink
              key={index}
              to={button.path}
              exact
              activeClassName="active"
              className="nav-link"
            >
              {button.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
