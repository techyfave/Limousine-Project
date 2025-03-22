import React from "react";
import "./corporate.css";
import { Row, Col } from "react-bootstrap";

function Corporate() {
  return (
    <div>
      <header className="corporate-header w-100 d-flex justify-content-center align-items-center custom-color text-white">
        <h1 className="fs-3">Corporate Transportation Services</h1>
      </header>

      <main className="corporate-main">
        <div className="mx-4">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className="boxes box-1">
                <h2 className="fs-3 fw-bold">Elevate your Corporate Travel</h2>
                <h2 className="fs-3 fw-bold">Experience</h2>
                <p className="mt-3 mb-5">
                  <span className="fw-bold">
                    In the fast-paced world of business, every minute counts.{" "}
                  </span>{" "}
                  Our corporate transportation services ensure you arrive at
                  your destination on time, every time, with the luxury and
                  convenience you deserve.
                </p>

                <h2 className="fs-3 fw-bold">Unmatched Comfort and Style</h2>
                <p className="py-3">
                  <span className="fw-bold">
                    When it comes to corporate travel, comfort and style should
                    not be compromised.
                  </span>{" "}
                  Our fleet of executive vehicles is equipped with plush
                  interiors, allowing you to relax or prepare for your next
                  meeting while on the road. Whether you need a sleek sedan for
                  a solo trip or a spacious SUV for your team, we have options
                  to suit every requirement.
                </p>

                <p className="py-3">
                  Our professional chauffeurs are trained to provide exceptional
                  service, ensuring a smooth and stress-free journey from start
                  to finish. With our attention to detail and commitment to
                  quality, you can trust us to deliver an elevated travel
                  experience every time you step into one of our cars.
                </p>

                <button
                  type="button"
                  className="btn btn-info px-3 py-2 fs-5 mb-5"
                >
                  View Our Services
                </button>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <div className="boxes box-2">
                <div className="image"></div>
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
      </main>
    </div>
  );
}

export default Corporate;
