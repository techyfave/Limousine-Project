import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <img
              src="/Img/tranparent.png"
              alt="executive logo"
              height={80}
              className="navbar-brand"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
            <span
              className="navbar-toggler-icon"
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            ></span>
          </button>

          <div
            className={`navbar-collapse bg-primary justify-content-end fs-4 ${
              isOpen ? "show" : "collapse"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav fs-5">
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reservation" className="nav-link text-white">
                  RESERVATION
                </Link>
              </li>
              <li className="nav-item">
                <span className="text-white">LIVE AGENTS AVAILABLE 24/7</span>
              </li>
              <li className="nav-item">
                <Link to={"tel:+1610-938-1411"} className="nav-link text-white">
                  +1 610-938-1411
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
