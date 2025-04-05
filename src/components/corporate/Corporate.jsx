import React from "react";
import "./corporate.css";
import { Row, Col } from "react-bootstrap";
import Buttons from "../button/Buttons";

function Corporate() {
  return (
    <div>
      <main className="corporate-main">
        <div className="mx-4">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className=" box-1">
                <p className="fs-4 text-gold">
                  <span className="text-info fs-4">/</span> Elevate Your Travel
                </p>
                <h2 className="">Seamless Corporate Travel Solutions</h2>
                <p className="mt-3 mb-5 fs-5">
                  In the fast-paced world of business, every minute counts. Our
                  corporate transportation services guarantee that you arrive at
                  your destination on time, every time, enjoying the luxury and
                  convenience you deserve.
                </p>

                <h2>Exceptional Comfort and Elegance</h2>
                <p className="py-3 fs-5">
                  Comfort and style are essential in corporate travel. Our fleet
                  of executive vehicles is designed with plush interiors,
                  allowing you to relax or prepare for your next meeting while
                  on the road. Whether you require a sleek sedan for a solo trip
                  or a spacious SUV for your team, we have the perfect solution
                  to fit your needs.
                </p>

                <p className="fs-5">
                  Our professional chauffeurs are dedicated to providing
                  exceptional service, guaranteeing a smooth and stress-free
                  journey from start to finish.
                </p>

                <div className="pt-3 ">
                  <Buttons
                    text="View Our Services"
                    linkTo="/services"
                    btnStyle="btn-bg"
                  />
                </div>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <div className="mt-5">
                <div className="w-100">
                  <img
                    src="/public/img/corporate.jpg"
                    alt=""
                    className="w-100 rounded"
                  />
                </div>
                <h2 className="fs-3 pt-4 text-center">
                  Schedule Your Corporate Travel Today
                </h2>
                <div className="pt-3 d-flex justify-content-center">
                  <Buttons
                    text="Make Reservation"
                    linkTo="/reservation"
                    btnStyle="btn-bg"
                  />
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
