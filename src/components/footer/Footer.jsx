import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-color p-5">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box">
            <img src="/public/img/tranparent.png" alt="" height={100} />
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box">
            <ul className="footer-list">
              <li>
                <a className="middle-box" href="#">
                  Coporate Transportation Service
                </a>
              </li>
              <li>
                <a className="middle-box" href="#">
                  Event Transportation Service
                </a>
              </li>
              <li>
                <a className="middle-box" href="">
                  Executive Transportation services
                </a>
              </li>
              <li>
                <a className="middle-box" href="#">
                  Wedding Transportation Services
                </a>
              </li>
              <li>
                <a className="middle-box" href="">
                  Legal Transportation Services
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="footer-box">
            <ul>
              <li>
                <a className="right-box" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="right-box" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="right-box" href="#">
                  How it works
                </a>
              </li>
              <li>
                <a className="right-box" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="right-box" href="#">
                  Reservation
                </a>
              </li>
              <li>
                <a className="right-box" href="#">
                  Privacy Policy
                </a>
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
