import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../button/Buttons";

function About2() {
  return (
    <div>
      <div className="w-100 px-4 pb-5">
        <Row>
          <Col sm={12} md={6} lg={6}>
            {" "}
            <div>
              <img src="/Img/prine interior 2 edidted.jpg" alt="" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="px-4 pt-4 fs-3">
                Delivering Unmatched <br /> Luxury With Royal <br /> Road
              </h2>
              <p className="fs-5 px-4 py-3">
                We offer a fleet of meticulously maintained luxury vehicles,
                ensuring the highest standards of quality. Whether for an
                airport transfer or a special event, our cars are designed to
                impress and provide ultimate comfort.
              </p>
            </div>
            <div className="px-4">
              <Buttons text="Contact Us" linkTo="/contact" btnStyle="btn-bg" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex pb-4 my-3">
        <div className="bg-primary w-100 h-100 about2 text-white">
          <h3 className="pb-3">Step Into Elegance</h3>
          <p className="fs-5">
            Indulge in the luxury and sophistication you deserve. At Prince
            Executive Transport, we invite you to experience a world where every
            journey is an escape into elegance. Whether it's a corporate event,
            a special occasion, or just a night out, our commitment to class and
            comfort is unmatched.
          </p>
          <div className="pt-4">
            <Buttons
              text="Reserve A Ride"
              linkTo="/reservation"
              btnStyle="btn-bg"
            />
          </div>
        </div>

        {/* Disabled, not to been seen on the webpage, it also requires the Link impoeted at the top*/}
        <div className="bg-primary text-primary w-100 h-100 disabled">
          <h3 className="pb-3">Step Into Elegance</h3>
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
          {/* End of disabled */}
        </div>
      </div>
    </div>
  );
}

export default About2;
