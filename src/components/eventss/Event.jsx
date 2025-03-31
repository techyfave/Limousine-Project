import React from "react";
import { Row, Col } from "react-bootstrap";
import "./event.css";
import { Link } from "react-router";

function Event() {
  return (
    <div>
      <div className="mx-4 event-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <p className="fs-4 text-gold">
                <span className="text-info fs-4">/</span> Premier Event
                Transport
              </p>
              <h2 className="">
                Elegant, Trustworthy Event Transportation for Hassle-Free
                Planning
              </h2>
              <p className="py-3 fs-5">
                Organizing an event is no easy feat, and the last thing you
                should stress about is whether your transportation will be
                punctual. With Prince Executive Transport, you’ll enjoy smooth,
                opulent event transport designed to meet your specific
                requirements and impress your guests.
              </p>
              <p className="py-3 fs-5">
                Experience the perfect blend of pleasure and convenience with
                our exceptional transportation services designed for attendees
                of major events. Whether you're headed to an exciting concert or
                the famous Houston Rodeo, we provide a top-notch mobile
                transport experience tailored to your needs.
              </p>
              <div className="pt-3 ">
                <p className="btn-bg fs-5 d-inline">
                  <Link
                    to="/services"
                    className="text-decoration-none text-white text-center"
                  >
                    View Our Services
                  </Link>
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="mt-5">
              <div className="image-event">
                <img
                  src="/public/img/Event-image.jpg"
                  alt="Event Transportation Image"
                  className="w-100 rounded"
                />
              </div>
              <h2 className="fs-3 fw-bold pt-4 text-center">
                Schedule Your Corporate Travel Today
              </h2>
              <div className="pt-3 d-flex justify-content-center">
                <p className="btn-bg fs-5 d-inline">
                  <Link
                    to="/reservation"
                    className="text-decoration-none text-white text-center"
                  >
                    Make Reservation
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Event;
