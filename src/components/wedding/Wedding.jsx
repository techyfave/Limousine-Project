import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                <p className="btn-bg fs-5 d-inline">
                  <Link
                    to="/services"
                    className="text-decoration-none text-white text-center"
                  >
                    View Our Services
                  </Link>
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="wedding-boxes box-2">
              <div className="image-wedding"></div>
              <h2 className="fs-3 pt-4 text-center">
                Schedule Your Wedding Transportation Today
              </h2>
              <div className="pt-3 d-flex justify-content-center">
                <p className="btn-bg fs-5 d-inline">
                  <Link
                    to="/reservation"
                    className="text-decoration-none text-white text-center"
                  >
                    Make Reservation
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Wedding;
