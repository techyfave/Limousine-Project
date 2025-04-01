import React from "react";
import { Row, Col } from "react-bootstrap";

function About3() {
  return (
    <div className="p-4">
      <div className="px-3">
        <h2 className="text-center">Why Choose Us? </h2>
        <p className="fs-5 text-center pt-3 pb-0">
          At Prince Executive Transport, we don’t just provide transportation;
          we deliver an unmatched luxury travel experience.
        </p>
      </div>

      <div className="px-5 pt-3">
        <Row>
          {" "}
          <Col sm={6} md={3} lg={3}>
            <div className="bg-dark text-black p-4 about3 transitionBtn">
              <h2 className="fs-3">Unparalleled Luxury</h2>
              <p className="fs-5 pt-3">
                Step into sophistication with our meticulously maintained fleet
                of luxury vehicles. Each ride is equipped with premium
                amenities, plush interiors, and cutting-edge technology to make
                your journey as comfortable as possible.
              </p>
            </div>
          </Col>
          <Col sm={6} md={3} lg={3}>
            <div className="bg-dark text-black p-4 about3 transitionBtn">
              <h2 className="fs-3">Customized Services</h2>
              <p className="fs-5 pt-3">
                No two journeys are the same. Whether it’s an elegant wedding, a
                corporate event, a romantic night out, or an airport transfer,
                we tailor our services to fit your unique requirements.
              </p>
            </div>
          </Col>
          
          <Col sm={6} md={3} lg={3}>
            <div className="bg-dark text-black p-4 about3 transitionBtn">
              <h2 className="fs-3"> Safety First</h2>
              <p className="fs-5 pt-3">
                Your safety is our utmost concern. Our vehicles undergo regular
                inspections, and our chauffeurs are rigorously trained to adhere
                to the highest safety standards.
              </p>
            </div>
          </Col>
          <Col sm={6} md={3} lg={3}>
            <div className="bg-dark text-black p-4 about3 transitionBtn">
              <h2 className="fs-3">Professional Chauffeurs</h2>
              <p className="fs-5 pt-3">
                Our chauffeurs are more than drivers—they’re hospitality
                experts. Polite, punctual, and professional, they are dedicated
                to ensuring your safety, comfort, and a smooth ride from start
                to finish.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About3;
