import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./executive.css";

function Executive2() {
  return (
    <div className="px-4 executive-2-container bg-light pb-4">
      <h2 className="text-center">Effortless Travel, Enhanced Efficiency</h2>
      <p className="text-center py-3 px-5 fs-5">
        Bid farewell to the stress of commuting and welcome the convenience of
        corporate transportation services tailored to your needs. Whether you’re
        heading to a legal hearing, business meeting, or conference, we offer
        more than just a ride—our service acts as an extension of your
        workspace.
      </p>

      <div className="executive-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary p-4 rounded mt-3">
              <h2 className="fs-4">Timely Notifications</h2>
              <p className="fs-6">
                Keep up to date with your travel plans through continuous
                communication, ensuring peace of mind and accuracy in
                scheduling.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary p-4 rounded mt-3">
              <h2 className="fs-4">Stay Connected</h2>
              <p className="fs-6">
                Utilize dedicated high-speed WiFi to convert your travel time
                into productive sessions or enjoy seamless leisure without
                interruptions.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary p-4 rounded mt-3">
              <h2 className="fs-4">Work On-The-Go</h2>
              <p className="fs-6">
                Our vehicles are equipped with ergonomic seating and adjustable
                workspaces, creating a perfect mobile office environment.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary p-4 rounded mt-3">
              <h2 className="fs-4">Dependability</h2>
              <p className="fs-6">
                Our professional chauffeurs guarantee punctuality, comfort, and
                discretion, allowing you to concentrate on what truly matters.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="pt-3 d-flex justify-content-center">
        <p className="btn-bg fs-5 d-inline">
          <Link
            to="/contact"
            className="text-decoration-none text-white text-center"
          >
            Contact Us Today
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Executive2;
