import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import "./event.css";

function Event2() {
  return (
    <div className="px-4 event-2-container pb-4">
      <h2 className="fs-2 fw-bold text-center">
        Why Choose Our Event Transportation Services?
      </h2>
      <p className="text-center pt-3 pb-5 fs-5">
        We understand how important timeliness is on your event day. Our drivers
        are committed to ensuring every appointment runs smoothly and
        stress-free.
      </p>

      <div className="event-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">On-Time Arrival Guaranteed</h2>
              <p className="fs-5">
                Timeliness is at the heart of our service. With 24/7 monitoring
                and real-time updates, you can trust us to get you where you
                need to be, exactly when you need to be there.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Luxurious Comfort and Style</h2>
              <p className="fs-5">
                From sleek sedans to spacious SUVs, our fleet of elegant
                vehicles ensures you travel with a touch of sophistication.
                Enjoy plush seating, climate control, and all the amenities
                designed for your ultimate comfort.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">Tailored Packages</h2>
              <p className="fs-5">
                Our Services are tailored to your unique needs. Whether your
                event requires a single ride or a full-day service, we create
                customized packages to match your specific requirements.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <h2 className="fs-3 fw-bold">24/7 Availability</h2>
              <p className="fs-5">
                Peace of mind is priceless. Our dedicated support team is
                available round-the-clock to assist with logistics, changes, or
                emergencies. We guarantee timeliness, safety, and
                professionalism at all times.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center pb-5">
        <Link to="/contact">
        <button type="button" className="btn btn-info px-3 py-2 fs-5 mt-3">
          Contact Us Today
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Event2;
