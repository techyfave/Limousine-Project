import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./herosection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Herosection() {
  return (
    <div className="hero-section">
      <div className="overlay">
        <main className="">
          <div className="hero-text-container mx-4">
            <h1 className="hero-text">
              Prince Executive <br /> Transport LLC
            </h1>
            <p className="pt-3 fs-4">
              <Link to="/reservation" className="text-white hero-link">
                Book Your Suburban/Limousine{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </p>
          </div>

          <div className="hero-section-boxes px-4">
            <p className="fs-5 text-gold text-center">
              <span className="text-info fs-4">/</span> Ride in Style
            </p>
            <h2 className="text-center py-3">
              Your Premier Limousine Experience
            </h2>

            <div className="w-100 bg-primary p-4 hero1">
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div className=" w-100 text-white mt-5">
                    <h2 className="text-center pt-lg-5 mt-lg-5 pt-sm-4 pt-md-0 mt-md-0 hero-text2">
                      Luxurious Fleet
                    </h2>
                    <p className="fs-5 px-lg-5">
                      Our selection of high-end limousines and SUVs are designed
                      to cater to your every need. Each vehicle boasts plush
                      seating, modern amenities, and a meticulously maintained
                      interior that ensures your ride is as enjoyable as it is
                      stylish.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div className="w-100">
                    <img
                      src="/Img/prince 1.jpg"
                      alt=""
                      className="w-100 hero1-image mt-5"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div className="w-100">
                    <img
                      src="/Img/black suburban.jpg"
                      alt=""
                      className="w-100 hero1-image mt-5"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div className=" w-100 text-white mt-5">
                    <h2 className="text-center pt-lg-5 mt-lg-5 pt-sm-4 pt-md-0 mt-md-0 hero-text2">
                      Professional Chauffeurs
                    </h2>
                    <p className="fs-5 px-lg-5">
                      Our team of trained and experienced chauffeurs are
                      committed to providing you with an exceptional service.
                      Their local knowledge and dedication to customer
                      satisfaction make every ride a pleasure, allowing you to
                      sit back and relax.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div className=" w-100 text-white mt-5">
                    <h2 className="text-center pt-lg-5 mt-lg-5 pt-sm-4 pt-md-0 mt-md-0 hero-text2">
                      Tailored Experience
                    </h2>
                    <p className="fs-5 px-lg-5">
                      Whether you’re planning a wedding, corporate event, or a
                      night out, we customize our services to fit your unique
                      requirements. Let us create a memorable experience
                      tailored just for you.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div className="w-100">
                    <img
                      src="/Img/hero-wedding.jpg"
                      alt=""
                      className="w-100 hero1-image mt-5 "
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Herosection;
