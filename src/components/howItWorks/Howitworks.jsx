import React from "react";
import { Row, Col } from "react-bootstrap";

function Howitworks() {
  return (
    <div>
      <div className="w-100 px-4 py-5 mt-5">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2>1. Book Your Ride</h2>
              <p className="fs-4">
                Schedule your transportation online or through our dedicated
                support team.
              </p>
              <h2>2. Personalize Your Experience</h2>
              <p className="fs-4">
                Provide us with your itinerary, any special requests, and
                preferred office amenities for a tailored experience.
              </p>
              <h2>3. Stay On Track</h2>
              <p className="fs-4">
                Receive real-time updates and access high-speed WiFi to stay
                productive while our professional driver ensures a smooth,
                confidential ride.
              </p>
              <h2>4. Arrive at Your Destination</h2>
              <p className="fs-4">
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
              <h2 className="text-center pt-4">Schedule Your Travel Today</h2>
              <div className="d-flex justify-content-center align-items-center pt-4">
                <button
                  type="button"
                  className="btn btn-info px-3 py-2 fs-5 mb-5"
                >
                  Make a Reservation
                </button>
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
