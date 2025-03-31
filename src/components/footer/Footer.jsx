import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-secondary p-3 w-100">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box pt-5">
            <Link to="/">
              <img src="/public/img/tranparent.png" alt="" height={80} />
            </Link>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box pt-5">
            <h3 className="text-black">Services...</h3>
            <ul className="footer-list fs-5">
              <li>
                <Link to="/corporate" className="middle-box">
                  Corporate Transportation
                </Link>
              </li>
              <li>
                <Link to="/executive" className="middle-box">
                  Executive Transportation
                </Link>
              </li>
              <li>
                <Link to="/executive" className="middle-box">
                  Birthdays
                </Link>
              </li>
              <li>
                <Link to="/wedding" className="middle-box">
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="/event" className="middle-box">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box pt-5">
            <h3 className="text-black text-end">Quick Links</h3>
            <ul className="footer-list fs-5">
              <li>
                <Link className="right-box" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="right-box" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="right-box" to="/howitworks">
                  How it works
                </Link>
              </li>
              <li>
                <Link className="right-box" to="/frequently-asked-questions">
                  FAQ'S
                </Link>
              </li>
              <li>
                <Link className="right-box" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="right-box" to="/reservation">
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="right-box">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <p className="copy text-white fs-5 text-center">
        &copy;Prince Executive Transport LLC
      </p>
    </footer>
  );
}

export default Footer;
