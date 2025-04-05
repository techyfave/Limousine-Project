import React from "react";
import { Row, Col } from "react-bootstrap";
import "./legal.css";
import { Link } from "react-router";

function Legal2() {
  return (
    <div className="px-4 legal-2-container pb-4 bg-light">
      <h2 className="fs-2 text-center">
        Seamlessly Travel Maximum Productivity
      </h2>
      <p className="text-center pt-3 pb-5 fs-5">
        Say goodbye to the hassle of commuting and hello to the convenience of
        legal transportation designed <br />
        with your needs in mind. Whether you’re traveling to a court hearing,
        business meeting, or conference, we <br />
        provide more than just a ride—our service is an extension of your
        office.
      </p>

      <div className="legal-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3">
              <h2 className="fs-4">Real-Time Updates</h2>
              <p className="fs-6 pt-2">
                Stay informed of your travel itinerary with constant
                communication, ensuring peace of mind and precision in
                scheduling.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3">
              <h2 className="fs-4">Stay Connected</h2>
              <p className="fs-6 py-3">
                With dedicated broadband WiFi, transform your travel time into
                productive hours or enjoy uninterrupted leisure.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3">
              <h2 className="fs-4">Work On-The-Go</h2>
              <p className="fs-6 pt-2">
                Our vehicles are equipped with ergonomic seating and adjustable
                workspaces, creating a perfect mobile office environment.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3">
              <h2 className="fs-4 ">Reliability You Can Trust</h2>
              <p className="fs-6">
                Our professional drivers ensure punctuality, comfort, and
                discretion, allowing you to focus on what matters most.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Legal2;
