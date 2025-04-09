import React from "react";
import { Row, Col } from "react-bootstrap";
import "./executive.css";

function Executive2() {
  return (
    <div className="px-4 executive-2-container bg-light pb-4">
      <h2 className="text-center">Effortless Travel, Enhanced Efficiency</h2>
      <p className="text-center py-3 px-5 px-sm-0 fs-5">
        "Elevate your travel experience with our executive transportation
        services, designed for professionals who demand excellence. Whether
        you're on your way to a high-profile meeting, networking event, or
        exclusive dinner, we provide more than transportation—we deliver an
        experience that reflects your status and sets the tone for success."
      </p>

      <div className="executive-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3 transitionBtn">
              <h2 className="fs-4">Timely Notifications</h2>
              <p className="fs-6">
                Keep up to date with your travel plans through continuous
                communication, ensuring peace of mind and accuracy in
                scheduling.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3 transitionBtn">
              <h2 className="fs-4">Work On-The-Go</h2>
              <p className="fs-6">
                Our vehicles are equipped with ergonomic seating and adjustable
                workspaces, creating a perfect mobile office environment.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3 transitionBtn">
              <h2 className="fs-4">Dependability</h2>
              <p className="fs-6">
                Our professional chauffeurs guarantee punctuality, comfort, and
                discretion, allowing you to concentrate on what truly matters.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-primary text-white p-4 rounded mt-3 transitionBtn">
              <h2 className="fs-4">Stay Connected</h2>
              <p className="fs-6">
                Utilize dedicated high-speed WiFi to convert your travel time
                into productive sessions or enjoy seamless leisure without
                interruptions.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Executive2;
