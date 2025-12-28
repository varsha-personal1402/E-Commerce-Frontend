import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo"><a href="#">ShopHub</a></h2>

      {/* Hamburger / Close Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Search Bar */}
      <div className="search-bar">

        <input
          type="text"
          className="search"
          placeholder="What's on your mind..."
        />

        <button className="search-btn">Search</button>
      </div>

      {/* Mobile + Desktop Nav Links */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
