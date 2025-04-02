import React from "react";
import { Row, Col } from "react-bootstrap";
import "./howitworks.css";
import Buttons from "../button/Buttons";

function Howitworks() {
  return (
    <div>
      <div className="w-100 px-4 py-5 ">
        <p className="fs-4 text-gold pb-4">
          <span className="text-info fs-4">/</span>Experience Luxury Ride
        </p>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h3>1. Book Your Ride</h3>
              <p className="fs-5">
                Schedule your transportation online or through our dedicated
                support team.
              </p>
              <h3>2. Personalize Your Experience</h3>
              <p className="fs-5">
                Provide us with your itinerary, any special requests, and
                preferred office amenities for a tailored experience.
              </p>
              <h3>3. Stay On Track</h3>
              <p className="fs-5">
                Receive real-time updates and access high-speed WiFi to stay
                productive while our professional driver ensures a smooth,
                confidential ride.
              </p>
              <h3>4. Arrive at Your Destination</h3>
              <p className="fs-5">
                Relax on focus on your work-your schedule remain uninterrupted
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="w-100 border-rounded">
              <img
                src="/public/img/edited-about-image.png"
                alt=""
                className="w-100"
              />
              <h3 className="text-center pt-4">Schedule Your Travel Today</h3>
              <div className="d-flex justify-content-center align-items-center pt-4">
                <Buttons
                  text="Book Your Ride"
                  linkTo="/reservation"
                  btnStyle="btn-bg"
                />
              </div>
            </div>
          </Col>
        </Row>

        <div className=" bg-info rounded">
          <h2 className="text-center pt-5">Questions? We Have Answers</h2>
          <p className="text-center fs-4 pt-3">
            Ready to experience a new standard in corporate transportation but
            unsure about something? View our frequently asked questions.
          </p>
          <div className="d-flex justify-content-center align-items-center pt-4">
            <button type="button" className="btn btn-info px-3 fs-5 mb-5">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
