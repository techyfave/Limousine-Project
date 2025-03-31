import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import "./event.css";

function Event2() {
  return (
    <div className="px-4 event-2-container pb-4 bg-light w-100">
      <p className="fs-4 text-gold text-center">
        <span className="text-info fs-4">/</span> Effortless Event Travel
      </p>
      <h2 className="fs-2 text-center">
        Why Choose Our Event Transportation Services?
      </h2>
      <p className="text-center py-3 fs-5">
        We understand how important timeliness is on your event day. Our drivers
        are committed to ensuring every appointment runs smoothly and
        stress-free.
      </p>

      <div className="event-2-items mb-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 rounded mt-3">
              <h2 className="fs-4">On-Time Arrival Guaranteed</h2>
              <p>
                Punctuality lies at the core of our service. With 24/7
                monitoring and up-to-the-minute updates, you can count on us to
                take you where you need to be, right when you need to be there.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 rounded mt-3">
              <h2 className="fs-4">Luxurious Comfort and Style</h2>
              <p className="">
                From sleek sedans to spacious SUVs, our fleet of elegant
                vehicles ensures you travel with a touch of sophistication.
                Enjoy plush seating, climate control, and all the amenities
                designed for your ultimate comfort.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 rounded mt-3">
              <h2 className="fs-4">Customized Packages</h2>
              <p className="py-4">
                Our services are designed to cater to your unique needs. Whether
                your event entails a single ride or a full-day service, we
                create tailored packages to fit your specific requirements.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 rounded mt-3">
              <h2 className="fs-4">24/7 Availability</h2>
              <p className="pt-3">
                Peace of mind is invaluable. Our dedicated support team is here
                24/7 to assist with logistics, adjustments, and emergencies. We
                ensure timeliness, safety, and professionalism at every turn.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="pt-3 d-flex justify-content-center">
        <p className="btn-bg fs-5 d-inline">
          <Link
            to="/contact"
            className="text-decoration-none text-white text-center"
          >
            Contact Us Today
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Event2;
