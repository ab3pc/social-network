import React from "react";
import { NavLink } from "react-router-dom";

const Aside:React.FC = () => {
   return (
    <nav className="nav">
      <div>
        <NavLink className="nav__link" to="profile">
        <i className="far fa-id-badge"></i>
          Profile</NavLink>
      </div>
      <div>
        <NavLink className="nav__link" to="dialogs">
        <i className="fas fa-sms"></i>
          Dialogs</NavLink>
      </div>
      <div>
        <NavLink className="nav__link" to="news">
        <i className="fas fa-newspaper"></i>
          News</NavLink>
      </div>
      <div>
        <NavLink className="nav__link" to="music">
        <i className="fas fa-music"></i>
          Music</NavLink>
      </div>
      <div>
        <NavLink className="nav__link" to="settings" >
        <i className="fas fa-sliders-h"></i>
          Settings</NavLink>
      </div>
    </nav>
  );
};

export default Aside;
