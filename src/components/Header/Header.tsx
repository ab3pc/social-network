import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png"
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <img
            className="img header__logo"
            src={logo}
            alt="LOGO"
          />
        
        </Link>

        <nav className='header__link'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chat">Live chat</NavLink>
          <NavLink to="/weather">Weather</NavLink>
          
        </nav>
        <NavLink className="header__login" to="/login">
          <span>Log in</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
