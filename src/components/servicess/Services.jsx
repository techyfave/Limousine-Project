import React from "react";
import { Row, Col } from "react-bootstrap";
import "./services.css";

function Services() {
  return (
    <div>
      <header className="service-header w-100 d-flex justify-content-center align-items-center custom-color text-white">
        <h1 className="fs-2">Services</h1>
      </header>

      <main>
        <div className="mx-5">
          <div className="service-box-container">
            <Row>
              <Col>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>Coporate Transportation</h3>
                  <p>
                    Fleet of SUV’s and Sedans equipped with dedicated broadband
                    Wi-Fi for robust internet service for clients wishing to
                    work during trip creating a “Mobile Office Environment”.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>Employee Transportation</h3>
                  <p>
                    Experienced, licensed limousine drivers trained to provide
                    safe, reliable transportation experience.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>Global Transfer</h3>
                  <p>
                    Ability to provide door to door transportation services for
                    nationwide trip destinations.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>Airport Pick Up & Drop Off</h3>
                  <p>
                    One way or round trip shared ride or private airport
                    transportation in Houston.
                  </p>
                  <p></p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>Multiple Appointments</h3>
                  <p>
                    Extensive experience in providing seamless transportation
                    for passengers requiring assistance in completing multiple
                    business appointments.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="service-box">
                  <p>Icon</p>
                  <h3>24/7 Live Agents</h3>
                  <p>
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
            <h2 className="text-white text-center fs-2">Weekly Tailored Invoices</h2>
            <p className="">
              Weeky billing with detailed receipts. LR CAR has the ability to
              customize receipt details to fit clients’ individual requirements.
            </p>
            <button type="button" className="btn btn-info mt-3 mb-5">
              Make Reservation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
