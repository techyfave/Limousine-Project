import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function About2() {
  return (
    <div>
      <div className="w-100 px-4 pb-5">
        <Row>
          <Col sm={12} md={6} lg={6}>
            {" "}
            <div>
              <img
                src="/public/img/limo-plane.jpg"
                alt=""
                className="w-100 hero1-image"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="px-4 pt-3">
                Delivering Unmatched <br /> Luxury With Royal <br /> Road
              </h2>
              <p className="fs-4 px-4 py-3">
                We offer a fleet of meticulously maintained luxury vehicles,
                ensuring the highest standards of quality. Whether for an
                airport transfer or a special event, our cars are designed to
                impress and provide ultimate comfort.
              </p>
            </div>
            <div className="px-4">
              <p className="btn-bg fs-5 d-inline">
                <Link
                  to="/contact"
                  className="text-decoration-none text-white text-center"
                >
                  Reserve a Ride
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex pb-4 my-3">
        <div className="bg-secondary w-100 h-100 about2">
          <h2 className="pb-3">Step Into Elegance</h2>
          <p className="fs-5">
            Indulge in the luxury and sophistication you deserve. At Prince
            Executive Transport, we invite you to experience a world where every
            journey is an escape into elegance. Whether it's a corporate event,
            a special occasion, or just a night out, our commitment to class and
            comfort is unmatched.
          </p>
          <div className="pt-4">
            <p className="btn-bg fs-5 d-inline">
              <Link
                to="/contact"
                className="text-decoration-none text-white text-center"
              >
                Reserve a Ride
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-secondary text-secondary w-100 h-100 disabled">
          <h2 className="pb-3">Step Into Elegance</h2>
          <p className="fs-5">
            Indulge in the luxury and sophistication you deserve. At Prince
            Executive Transport, we invite you to experience a world where every
            journey is an escape into elegance. Whether it's a corporate event,
            a special occasion, or just a night out, our commitment to class and
            comfort is unmatched.
          </p>
          <div className="pt-5">
            <p className=" fs-5 d-inline">
              <Link
                to="/contact"
                className="text-decoration-none text-white text-center"
              ></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
