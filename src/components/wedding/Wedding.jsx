import React from "react";
import { Row, Col } from "react-bootstrap";
import "./wedding.css";

function Wedding() {
  return (
    <div>
      <div className="mx-4 wedding-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="fs-2 fw-bold">
                Luxurious transportation tailored to your perfect day
              </h2>
              <p className="pt-3 pb-5 fs-5">
                Your wedding is one of the most important days of your
                life—don’t leave anything to chance.{" "}
                <span className="fw-bold">
                  Our wedding transportation service guarantees on-time arrival,
                  luxurious comfort, and a seamless experience,{"  "}
                </span>
                so you can focus on what matters most.
              </p>

              <h2 className="fs-2 fw-bold">
                Ensuring a Seamless and Elegant <br />
                Experience on Your Special Day.
              </h2>
              <p className="py-3 fs-5">
                Planning a wedding is no small feat, and the last thing you want
                to stress about is transportation. At LRCar, we specialize in
                providing luxurious, reliable wedding transportation that
                ensures every member of your wedding party—along with your
                guests—arrives on time and in style.
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
            <div className="wedding-boxes box-2">
              <div className="image-wedding"></div>
              <h2 className="fs-3 fw-bold pt-4 text-center">
                Schedule Your Wedding Transportation Today
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

export default Wedding;
