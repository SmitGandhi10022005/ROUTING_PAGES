import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  Navbar
  
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink  className='nav-link' to="/">
                  Home 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className='nav-link'  to="/Features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/Pricing">
                  Pricing
                </NavLink>
              </li>
             
            </ul>
  </div>
</nav>
      </div>
    );
  }
}
