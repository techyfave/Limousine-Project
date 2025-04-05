import React from "react";
import { Row, Col } from "react-bootstrap";
import "./services.css";
import Buttons from "../button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faCalendarDays,
  faClock,
  faBuilding,
  faCar,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Disabilities from "./Disabilities";

function Services2() {
  return (
    <div>
      <main>
        <div className="mx-5">
          <p className="fs-4 text-gold pt-5">
            {" "}
            <span className="text-info fs-4">/</span> At Your Service
          </p>
          <h2 className="py-3">Our Services</h2>
          <div className="service-box-container">
            <Row>
              <Col>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faBuilding}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">
                      Coporate Limousine Hire
                    </h3>
                    <p className="fs-5">
                      Experience our fleet of luxury limousines tailored for
                      corporate clients. Equipped with high-speed Wi-Fi, you can
                      stay productive while traveling, creating the perfect
                      "Mobile Office Environment."
                    </p>
                  </div>
                </Link>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faCar}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">
                      Employee Transportation
                    </h3>
                    <p className="fs-5">
                      We offer professional limousine services with licensed
                      chauffeurs trained to deliver safe, reliable
                      transportation experience for your employees. Travel in
                      style and comfort!
                    </p>
                  </div>
                </Link>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faEarthAmerica}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">Global Transfer</h3>
                    <p className="fs-5">
                      Our Global Limousine Transfer Services provide seamless,
                      door-to-door luxury transportation worldwide, ensuring
                      reliable and timely service with a professional chauffeur
                      in high-end vehicles.
                    </p>
                  </div>
                </Link>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faPlaneDeparture}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">
                      Airport Pick Up & Drop Off
                    </h3>
                    <p className="fs-5">
                      Whether you need a one-way or round trip, our limousine
                      service provides private airport transport in Houston,
                      ensuring a smooth and elegant transition to and from the
                      airport.
                    </p>
                    <p></p>
                  </div>
                </Link>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">Multiple Appointments</h3>
                    <p className="fs-5">
                      Extensive experience in providing seamless transportation
                      for passengers requiring assistance in completing multiple
                      business appointments.
                    </p>
                  </div>
                </Link>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Link
                  to="/reservation"
                  className="text-decoration-none text-black"
                >
                  <div className="service-box bg-light p-4 hero1-image">
                    <p>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="3x"
                        className="text-gold"
                      />
                    </p>
                    <h3 className="fs-4 fw-bold mb-3">24/7 Live Agents</h3>
                    <p className="fs-5">
                      Our dedicated team of live agents is available 24/7 to
                      assist you in managing and reserving your limousine
                      services nationwide. We’re here to ensure your experience
                      is unforgettable.
                    </p>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>

        <Disabilities />

        <div className="service-section-2">
          <div className="image-overlay">
            <h2 className="text-white text-center fs-3">
              Weekly Tailored Invoices
            </h2>
            <p className="text-white text-center pt-3 fs-5">
              Weeky billing with detailed receipts. Prince Executive Transport
              has the ability to customize receipt details to fit clients’
              individual requirements.
            </p>
            <div className="mt-3 d-flex justify-content-center">
              <Buttons
                text="Book A Ride Today"
                linkTo="/reservation"
                btnStyle="btn-bg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services2;
