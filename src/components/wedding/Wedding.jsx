import React from "react";
import { Row, Col } from "react-bootstrap";
import Buttons from "../button/Buttons";
import "./wedding.css";

function Wedding() {
  return (
    <div>
      <div className="mx-4 wedding-main">
        <p className="fs-4 text-gold">
          <span className="text-info fs-4">/</span> Premier Event Transport
        </p>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="">
                Elegant Transportation Customized for Your Special Day
              </h2>
              <p className="py-3 fs-5">
                Your wedding is one of the most significant moments of your
                life—don’t leave anything to chance. Our wedding transportation
                services ensure timely arrivals, exceptional comfort, and a
                smooth experience so you can concentrate on what truly matters.
              </p>

              <h2 className="fs-3">
                Creating a Flawless and Stylish Experience on Your Big Day
              </h2>
              <p className="py-3 fs-5">
                Planning a wedding is no small feat, and the last thing you want
                to stress about is transportation. At LRCar, we specialize in
                providing luxurious, reliable wedding transportation that
                ensures every member of your wedding party—along with your
                guests—arrives on time and in style.
              </p>
              <p className="fs-5">
                Organizing a wedding is no easy task, and you shouldn't have to
                worry about transportation. At LRC, we focus on delivering
                luxurious and dependable wedding transportation that guarantees
                every member of your wedding party, including your guests,
                arrives on time and in style.
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
            <div className="w-100">
              <div className="w-100">
                <img
                  src="/Img/wedding-transportation.jpg"
                  alt="An image of happy wedded couple"
                  className="w-100 rounded"
                />
              </div>
              <h2 className="fs-3 pt-4 text-center">
                Schedule Your Wedding Transportation Today
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
    </div>
  );
}

export default Wedding;
