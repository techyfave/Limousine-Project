import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg cont">
        <div class="container-fluid p-2">
          <a class="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end fs-4"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Reservation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  LIVE AGENTS AVAILABLE 24/7
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary " href="#">
                  +1-610-938-1411
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
