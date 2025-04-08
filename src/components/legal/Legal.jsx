import React from "react";
import { Row, Col } from "react-bootstrap";
import "./legal.css";
import Buttons from "../button/Buttons";

function Legal() {
  return (
    <div>
      <div className="mx-4 legal-main">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <p className="fs-4 text-gold">
              <span className="text-info fs-4">/</span> Premier Legal Transport
            </p>
            <div>
              <h2 className="fs-2">Premium Legal Transportation Service</h2>
              <p className="py-3 fs-5">
                At Prince Executive Transport, we provide discreet and luxurious
                transportation solutions specifically designed for lawyers and
                legal professionals. Whether you’re heading to court, a client
                meeting, or a deposition, our services ensure your journey is
                productive and stress-free.
              </p>

              <h2 className="fs-3">
                Simplify Your Commute, Focus on Your Case
              </h2>
              <p className="py-3 fs-5">
                Transportation is a crucial aspect of a lawyer’s daily routine.
                That’s why we offer a seamless travel experience that allows you
                to focus on your cases rather than your commute.
              </p>

              <p className="fs-5 pb-3">
                Say goodbye to stressful and unproductive commutes. With our
                legal transportation solutions, you can turn your travel time
                into valuable work time. Trust us to simplify your commute so
                that you can focus on what truly matters—winning your cases for
                your clients. Let us handle the transportation, while you handle
                the law. Let’s work together to achieve success in and out of
                the courtroom.
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
                  src="/Img/legal-transporatation.jpg"
                  alt=""
                  className="w-100 rounded"
                />
              </div>
              <h2 className="fs-3  pt-4 text-center">
                Schedule Your Legal Travel Today
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

export default Legal;
