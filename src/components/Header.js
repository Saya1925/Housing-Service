import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">HOME</NavLink>
        <NavLink to="/services" activeClassName="active">SERVICES</NavLink>
        <NavLink to="/about" activeClassName="active">ABOUT US</NavLink>
        <NavLink to="/signup" activeClassName="active">Sign UP</NavLink>
        <NavLink to="/login" activeClassName="active">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
