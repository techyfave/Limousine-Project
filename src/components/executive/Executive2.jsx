import React from "react";
import { Row, Col } from "react-bootstrap";
import "./executive.css";

function Executive2() {
  return (
    <div className="px-4 executive-2-container pb-4">
      <h2 className="fs-2 fw-bold text-center">
        Seamlessly Balancing Work and Travel
      </h2>
      <p className="text-center pt-3 pb-5 fs-5">
        Say goodbye to the hassle of commuting and hello to the convenience of
        executive transportation designed <br />
        with your needs in mind. Whether you’re traveling to a court hearing,
        business meeting, or conference, we <br />
        provide more than just a ride—our service is an extension of your
        office.
      </p>

      <div className="executive-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Real-Time Updates</h2>
              <p className="fs-5">
                Stay informed of your travel itinerary with constant
                communication, ensuring peace of mind and precision in
                scheduling.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Stay Connected</h2>
              <p className="fs-5">
                With dedicated broadband WiFi, transform your travel time into
                productive hours or enjoy uninterrupted leisure.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Work On-The-Go</h2>
              <p className="fs-5">
                Our vehicles are equipped with ergonomic seating and adjustable
                workspaces, creating a perfect mobile office environment.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Reliability You Can Trust</h2>
              <p className="fs-5">
                Our professional drivers ensure punctuality, comfort, and
                discretion, allowing you to focus on what matters most.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center pb-5">
        <button type="button" className="btn btn-info px-3 py-2 fs-5 mt-3">
          Contact Us Today
        </button>
      </div>
    </div>
  );
}

export default Executive2;
