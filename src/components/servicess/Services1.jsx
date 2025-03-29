import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Services1() {
  return (
    <div>
      <div className="m-4 mt-5">
        <p className="fs-4 text-gold pt-5">
          {" "}
          <span className="text-info fs-4">/</span> Ride in Elegance
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="px-3">
            Luxury Limousine <br /> Service in Your City
          </h2>
          <p className="btn-bg fs-5 d-inline">
            <Link
              to="/contact"
              className="text-decoration-none text-white text-center"
            >
              Contact Us
            </Link>
          </p>
        </div>

        <div className="my-4">
          <Row>
            <Col sm={12} md={12} lg={6}>
              <div className="w-100 p-5 bg-light hero1-image">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  size="3x"
                  className="text-gold"
                />
                <p className="fs-5">
                  Experience unparalleled comfort and luxury with our limousine
                  services, perfect for special events or turning an ordinary
                  day into something extraordinary.
                </p>
                <p className="bg-secondary py-2 px-4 d-inline-block rounded-pill">
                  Proffesional Chauffers
                </p>{" "}
                <p className="bg-secondary py-2 px-4  d-inline-block rounded-pill">
                  Premium Vehicles
                </p>{" "}
                <p className="bg-secondary py-2 px-4  d-inline-block rounded-pill">
                  On-Time, Every-Time
                </p>{" "}
                <p className="bg-secondary py-2 px-4  d-inline-block rounded-pill">
                  Seamless Experience
                </p>{" "}
                <br />
                <div className="mt-3">
                  <p className="bg-gold d-inline fs-5 py-2 px-3 rounded-pill">
                    <Link className="text-decoration-none text-white text-center">
                      Book A Ride Today
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12}  lg={6}>
              <div className="w-100">
                <img
                  src="/public/img/limo-service.jpg"
                  alt=""
                  className="w-100 hero1-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Services1;
