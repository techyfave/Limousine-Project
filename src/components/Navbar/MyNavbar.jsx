import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="light"
      className="fixed-top"
    >
      <div className="d-flex">
        <div>
          <Navbar.Brand href="/">
            <img
              src="/Img/tranparent.png"
              alt="Prince Executive Transport Logo"
              height={80}
              className="navbar-brand"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <div className="">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/about" className="text-white nav-link">
                  ABOUT{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/services" className="text-white nav-link">
                  SERVICES
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/contact" className="text-white nav-link">
                  CONTACT
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/reservation" className="text-white nav-link">
                  RESERVATION
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white nav-link">
                {" "}
                LIVE AGENTS AVAILABLE 24/7
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="tel:+1 610 938 1411" className="text-white nav-link">
                  +1-610-938-1411
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
