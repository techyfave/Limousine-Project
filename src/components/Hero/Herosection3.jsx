import React from "react";
import { Row, Col } from "react-bootstrap";
import Buttons from "../button/Buttons";

function Herosection3() {
  return (
    <div>
      <div className="w-100 d-flex px-4 hero-3">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="hero3-box1 w-100 d-flex justify-content-center align-items-center">
              <h2 className="py-4 px-2">
                Providing Door to Door <br /> Transportation Services <br />
                Worldwide <span className="fst-italic">with</span>
                <br /> Prince Executive Transport LLC
              </h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="hero-section3-box2 w-100">
              <img src="/Img/prince suburban back 1.jpg" alt="" width="100%" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="bg-light p-4">
        <h3>10% Discount For People With Disabilities</h3>
        <p className="fs-6">
          To support individuals with disabilities, we offer a 10% discount on
          all limousine hire services.
        </p>
        <Buttons text="Apply now!!!" btnStyle="btn-bg" linkTo="/disability" />
      </div>
    </div>
  );
}

export default Herosection3;
