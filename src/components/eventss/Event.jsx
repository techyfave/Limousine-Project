import React from "react";
import { Row, Col } from "react-bootstrap";
import "./event.css";

function Event() {
  return (
    <div>
      <div className="mx-4 event-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="fs-2 fw-bold">
                Luxurious, Reliable Event <br /> Transportation for Stress-Free
                <br />
                Planning
              </h2>
              <p className="pt-3 pb-5 fs-5">
                Planning an event is no small task, and the last thing you need
                is to worry about whether your transportation will arrive on
                time. With LRCar, you’ll experience seamless, luxurious event
                transportation that’s tailored to your needs and designed to
                impress.
              </p>

              <h2 className="fs-3 fw-bold">
                Elevate Your Event with Elegant Vehicles and Experienced Drivers
                | Guaranteed On-Time
              </h2>
              <p className="pt-3 pb-5 fs-5">
                Effortlessly combine enjoyment and convenience with our superb
                transportation services crafted for those attending big events.{" "}
                <span className="fw-bold">
                  Whether you’re off to a lively concert or the renowned Houston
                  Rodeo,{" "}
                </span>{" "}
                we offer a first-rate mobile transportation experience
                customized to your preferences.
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
            <div className="event-boxes box-2">
              <div className="image-event"></div>
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

export default Event;
