import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./wedding.css";

function Wedding2() {

  return (
    <div className="px-4 wedding-2-container pb-4">
      <h2 className="fs-3  text-center">
        Why Choose Prince Excecutive for Wedding Transportation?
      </h2>
      <p className="text-center pt-3 pb-5 fs-5">
        We understand how important timeliness is on your wedding day. Our
        drivers are committed to ensuring every <br /> appointment runs smoothly
        and stress-free.
      </p>

      <div className="wedding-2-items mb-4">
        <Row>
          
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 mt-3 rounded transitionBtn">
              <h2 className="fs-4 ">Professional Drivers</h2>
              <p className="fs-6">
                Our licensed, experienced drivers specialize in seamless,
                hassle-free transportation for weddings. With us, discretion and
                professionalism are guaranteed.
              </p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 mt-3 rounded transitionBtn">
              <h2 className="fs-4">A Touch of Luxury</h2>
              <p className="fs-6">
                Step into sophistication with our fleet of comfortable, elegant
                vehicles that are sure to elevate your wedding experience and
                make every ride unforgettable.
              </p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 mt-3 rounded transitionBtn">
              <h2 className="fs-4">Customizable Packages</h2>
              <p className="fs-6">
                From intimate ceremonies to large celebrations, our tailored
                transportation packages fit your unique needs and schedule.
                
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-secondary p-4 mt-3 rounded transitionBtn">
              <h2 className="fs-4">24/7 Availability</h2>
              <p className="fs-6">
                Peace of mind is priceless. Our dedicated support team is
                available round-the-clock to assist with logistics, changes, or
                emergencies. We guarantee timeliness, safety, and
                professionalism at all times.
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

export default Wedding2;
