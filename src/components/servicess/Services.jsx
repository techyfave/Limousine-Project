import React from "react";
import { Row, Col } from "react-bootstrap";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faCalendarDays,
  faClock,
  faBuilding,
  faCar,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function Services() {
  return (
    <div>

      <main>
        <div className="mx-5">
          <div className="service-box-container">
            <Row>
              <Col>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faBuilding} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">Coporate Transportation</h3>
                  <p className="fs-5">
                    Fleet of SUV’s and Sedans equipped with dedicated broadband
                    Wi-Fi for robust internet service for clients wishing to
                    work during trip creating a “Mobile Office Environment”.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faCar} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">Employee Transportation</h3>
                  <p className="fs-5">
                    Experienced, licensed limousine drivers trained to provide
                    safe, reliable transportation experience.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faEarthAmerica} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">Global Transfer</h3>
                  <p className="fs-5">
                    Ability to provide door to door transportation services for
                    nationwide trip destinations.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faPlaneDeparture} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">
                    Airport Pick Up & Drop Off
                  </h3>
                  <p className="fs-5">
                    One way or round trip shared ride or private airport
                    transportation in Houston.
                  </p>
                  <p></p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faCalendarDays} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">Multiple Appointments</h3>
                  <p className="fs-5">
                    Extensive experience in providing seamless transportation
                    for passengers requiring assistance in completing multiple
                    business appointments.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>
                    <FontAwesomeIcon icon={faClock} size="3x" />
                  </p>
                  <h3 className="fs-4 fw-bold mb-3">24/7 Live Agents</h3>
                  <p className="fs-5">
                    24/7 live agents available to provide, manage and monitor
                    transportation services nationwide.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="service-section-2">
          <div className="image-overlay">
            <h2 className="text-white text-center fs-3">
              Weekly Tailored Invoices
            </h2>
            <p className="text-white text-center pt-3 fs-6">
              Weeky billing with detailed receipts. LR CAR has the ability to
              customize receipt details to fit clients’ individual requirements.
            </p>
            <div className="d-flex justify-content-center">
              <Link to="/reservation">
              <button type="button" className="btn btn-info mt-3 mb-5">
                Make Reservation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
