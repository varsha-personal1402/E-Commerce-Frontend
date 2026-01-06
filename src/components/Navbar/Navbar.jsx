import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  },[]);


  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          <Link to="/">ShopHub</Link>
        </h2>

        {/* Hamburger */}
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

        {/* Navbar Menu */}
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/men" onClick={() => setMenuOpen(false)}>
              Men
            </Link>
            <Link to="/women" onClick={() => setMenuOpen(false)}>
              Women
            </Link>
            <Link to="/kids" onClick={() => setMenuOpen(false)}>
              Kids
            </Link>
            <Link to="/accessories" onClick={() => setMenuOpen(false)}>
              Accessories
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
          </div>

          <div className="nav-actions">
            {user ? (
              <>
                <button
                  className="btn profile-btn"
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  Profile
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn login-btn"
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="btn signup-btn"
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
