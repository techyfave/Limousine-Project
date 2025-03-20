import React from "react";
import "./herosection.css";
import { Row, Col } from "react-bootstrap";

function Herosection() {
  return (
    <main className="hero-section">
      <h1 className="text-white">
        National and International <br /> Transportation
      </h1>

      <button type="button" className="btn btn-info m-5">
        Make Reservation
      </button>

      <div className="w-100 h-100 bg-white hero-section-container">
        <Row>
          <Col lg={4} md={6} sm={12}>
            {" "}
            <div className="boxes">
              <h2 className="text-center">
                Fleet of Full-Size <br />
                SUV’s & Sedans
              </h2>
              <p>
                Fleet of SUV’s and Sedans equipped with dedicated broadband
                Wi-Fi for robust internet service for clients wishing to work
                during trip.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="boxes">
              <img
                src="/public/img/first-container-image 1.png "
                alt=""
                width="400px"
              />
              <h2>
                Experienced, Reliable and <br /> Trusted Drivers
              </h2>
              <p>
                Experienced, licensed limousine drivers trained to provide safe,
                reliable transportation experience.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="boxes">
              <img
                src="/public/img/first-container-image 2.png"
                alt=""
                width="400px"
              />
              <h2>
                24/7 Phone & Text Client <br /> Communication
              </h2>
              <p>
                24/7 live agents available to provide, manage and monitor
                transportation services nationwide.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Herosection;
