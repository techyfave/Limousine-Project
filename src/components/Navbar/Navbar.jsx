import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <img
              src="/public/img/tranparent.png"
              alt=""
              height={80}
              className="navbar-brand"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end fs-4"
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
                <p className="nav-link text-white ">
                  LIVE AGENTS AVAILABLE 24/7
                </p>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white">+1 610-938-1411</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
