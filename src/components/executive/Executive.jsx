import React from "react";
import { Row, Col } from "react-bootstrap";
import "./executive.css";

function Executive() {
  return (
    <div>
      <div className="mx-4 executive-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="fs-2 fw-bold">
                Executive Comfort and Reliable <br />
                Transportation
              </h2>
              <p className="pt-3 pb-5 fs-5">
                <span className="fw-bold">
                  When every second counts, trust our commitment to punctuality
                  and precision.
                </span>{" "}
                Arrive at your destination poised and ready to conquer the day,
                knowing you’ve chosen a service that moves seamlessly with your
                schedule.
              </p>

              <h2 className="fs-3 fw-bold">
                Bespoke Services for Discerning Clients
              </h2>
              <p className="py-3 fs-5">
                <span>
                  Tailored to meet the unique demands of each traveler, our
                  personalized services go beyond the conventional.
                </span>
                Whether you require a quiet haven for reflection or dynamic
                collaboration space on the move, we adapt to your needs,
                ensuring each aspect of your journey is uniquely yours.
              </p>

              <p className="pb-5 fs-5">
                Move forward with a service designed to support your aspirations
                and streamline your path to achievement. With us, your journey
                is more than just travel—it’s a seamless extension of your
                professional narrative, reflecting ambition and sophistication
                at every turn. Contact us today to schedule your travel.
              </p>

              <button
                type="button"
                className="btn btn-info px-3 py-2 fs-5 mt-3"
              >
                Contact Us Today
              </button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="executive-boxes box-2">
              <div className="image-executive"></div>
              <h2 className="fs-3 fw-bold pt-4 text-center">
                Schedule Your Corporate Travel Today
              </h2>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-info px-3 py-2 fs-5 mt-3"
                >
                  Make Reservation
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Executive;
