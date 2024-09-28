import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="path/to/icon.png" alt="App Icon" className="app-icon" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/signup" className="nav-button">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
