import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../button/Buttons";

function Footer() {
  return (
    <footer className="bg-primary p-4 w-100">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box pt-5">
            <Link to="/">
              <img src="/public/img/tranparent.png" alt="" height={80} />
            </Link>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-between mt-5 align-items-center text-white flex-wrap">
            <h3 className="pt-1">Get In Touch</h3>
            <p className="pt-3 fs-5">
              Contact us today and experience luxury on the go
            </p>
            <Buttons text="Contact Us" linkTo="/contact" btnStyle="btn-bg" />
          </div>
        </Col>
      </Row>

      <div className="w-100 pt-5">
        <Row>
          <Col sm={6} md={4} lg={3}>
            <div className="pt-5">
              <h3 className="text-gold">Contact Us</h3>
              <ul className="footer-list">
                <li>
                  {" "}
                  <a
                    href="mailto:destinedadjuster@gmail.com"
                    className="middle-box text-decoration"
                  >
                    destinedadjuster@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1609381411" className="middle-box">
                    +1-610-938-1411
                  </a>
                </li>
                <li className="middle-box">9626, S. Kirkwood Road, Suite B</li>
                <li className="middle-box">Houston, Texas. 77099</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <div className="w-100 pt-5">
              <h3 className="text-gold">About Us</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/about" className="middle-box ">
                    Our Story{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="middle-box ">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/reservation" className="middle-box ">
                    Book A Ride
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="middle-box ">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <div className="w-100 pt-5">
              <h3 className="text-gold">Services...</h3>
              <ul className="footer-list">
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
                  <Link to="/legal" className="middle-box">
                    Legal Transportation{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/event" className="middle-box">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/wedding" className="middle-box">
                    Wedding
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <div className="pt-5">
              {" "}
              <h3 className="text-gold">Quick Links</h3>
              <ul className="footer-list">
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
      </div>

      <p className="copy text-white fs-5 text-center">
        &copy;Prince Executive Transport LLC
      </p>
    </footer>
  );
}

export default Footer;
