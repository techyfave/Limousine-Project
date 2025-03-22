import React from "react";
import { Row, Col } from "react-bootstrap";
import "./legal.css";

function Legal() {
  return (
    <div>
      <header className="legal-header w-100 d-flex justify-content-center align-items-center custom-color text-white">
        <h1 className="fs-2">Legal Transportation Services</h1>
      </header>

      <div className="mx-4 legal-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="fs-2 fw-bold">
                Transportation Tailored for Legal Professionals
              </h2>
              <p className="pt-3 pb-5 fs-5">
                <span className="fw-bold">LR Car Services</span> offers
                discreet, luxury transportation for lawyers and law firms who
                need to stay productive while on the move. From real-time
                itinerary updates to a mobile office environment, we provide
                more than just a ride—we provide time.
              </p>

              <h2 className="fs-3 fw-bold">
                Simplify Your Commute, Focus on Your Case
              </h2>
              <p className="py-3 fs-5">
                <span className="fw-bold">
                  Transportation is an integral part of a lawyer’s daily
                  routine,
                </span>{" "}
                but it doesn’t have to be a hindrance to their productivity. Our
                services are designed to simplify your commute and allow you to
                focus on your cases instead.
              </p>

              <p className="fs-5 pb-5">
                Say goodbye to stressful and unproductive commutes. With our
                legal transportation solutions, you can turn your travel time
                into valuable work time. Trust us to simplify your commute so
                that you can focus on what truly matters—winning your cases for
                your clients. Let us handle the transportation, while you handle
                the law. Let’s work together to achieve success in and out of
                the courtroom.
              </p>

              <button
                type="button"
                className="btn btn-info px-3 py-2 fs-5 mb-5"
              >
                Contact Us Today
              </button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="legal-boxes box-2">
              <div className="image-legal"></div>
              <h2 className="fs-3 fw-bold pt-4 text-center">
                Schedule Your Legal Travel Today
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

export default Legal;
