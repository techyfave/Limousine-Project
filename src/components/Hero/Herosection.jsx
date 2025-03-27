import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./herosection.css";

function Herosection() {
  return (
    <div className="hero-section">
      <main className="">
        <div className="hero-text-container mx-4">
          <h1 className="hero-text">
            National and International <br /> Transportation
          </h1>
          <button type="button" className="btn btn-info">
            <Link to="/reservation" className="btn-link">
              Make Reservation
            </Link>
          </button>
        </div>

        <div className="hero-section-boxes px-4">
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div className="box">
                <h2>
                  Fleet of Full-Size <br /> SUV's & Sedans
                </h2>
                <p>
                  Fleet of SUV’s and Sedans equipped with dedicated broadband
                  Wi-Fi for robust internet service for clients wishing to work
                  during trip.
                </p>

                <a href="#">Our Business Services</a>
                <br />
                <a href="#">Our Legal Services</a>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="box">
                <img
                  src="/public/img/first-container-image 1.png"
                  alt=""
                  className="w-100"
                />
                <h2>Experienced, Reliable and Trusted Drivers</h2>
                <p>
                  Experienced, licensed limousine drivers trained to provide
                  safe, reliable transportation experience.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className="box">
                <img
                  src="/public/img/first-container-image 2.png"
                  alt=""
                  className="w-100"
                />
                <h2>24/7 Phone & Text Client Communication</h2>
                <p>
                  24/7 live agents available to provide, manage and monitor
                  transportation services nationwide.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default Herosection;
