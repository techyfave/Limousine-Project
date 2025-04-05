import React from "react";
import { Row, Col } from "react-bootstrap";
import Buttons from "../button/Buttons";

import "./executive.css";

function Executive() {
  return (
    <div>
      <div className="mx-4 executive-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <p className="fs-4 text-gold">
                <span className="text-info fs-4">/</span> Elegance meets
                Efficency
              </p>
              <h2 className="">
                Executive Comfort and Reliable <br />
                Transportation
              </h2>
              <p className="py-3 fs-5">
                When every moment matters, rely on our pledge to punctuality and
                precision. Reach your destination prepared and ready to excel,
                knowing you’ve selected a service that aligns seamlessly with
                your schedule.
              </p>

              <h2 className="fs-3">
                Tailored Services for Discerning Travelers
              </h2>
              <p className="py-3 fs-5">
                Crafted to meet the specific needs of every traveler, our
                customized services exceed the ordinary. Whether you need a
                serene space for contemplation or an interactive setting for
                collaboration on the go, we adjust to your requirements,
                ensuring that every part of your journey is distinctly yours.
              </p>

              <p className="pb-3 fs-5">
                Embark on a service designed to enhance your goals and simplify
                your path to success. With us, your travel experience becomes
                more than just a trip—it transforms into a natural extension of
                your professional story, showcasing drive and elegance at every
                step.
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
            <div>
              <div className="w-100 mt-5">
                <img
                  src="/public/img/executive-transportation.jpg "
                  alt=""
                  className="w-100 rounded"
                />
              </div>
              <h2 className="fs-3 pt-4 text-center">
                Plan Your Executive Travel Today
              </h2>
              <div className="d-flex justify-content-center">
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
    </div>
  );
}

export default Executive;
