import React from "react";
import { Row, Col } from "react-bootstrap";
import "./howitworks.css";
import Buttons from "../button/Buttons";

function Howitworks() {
  return (
    <div>
      <div className="w-100 px-4 pt-5 ">
        <p className="fs-4 text-gold py-4">
          <span className="text-info fs-4">/</span>Experience Luxury Ride
        </p>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h3>1. Book Your Limousine</h3>
              <p className="fs-5">
                Schedule your luxurious ride online or through our dedicated
                support team. Choose from a variety of vehicles to suit your
                style.
              </p>
              <h3 className="pt-3">2. Customize Your Experience</h3>
              <p className="fs-5">
                Let us know your itinerary, any special requests, and preferred
                amenities to create a personalized journey just for you.
              </p>
              <h3 className="pt-3">3. Stay Connected</h3>
              <p className="fs-5">
                Enjoy real-time updates and access high-speed WiFi while our
                professional chauffeur ensures a smooth, discreet ride.
              </p>
              <h3 className="pt-3">4. Arrive in Style</h3>
              <p className="fs-5">
                Relax and focus on what matters while we handle the details.
                Your schedule remains uninterrupted as you arrive at your
                destination in elegance.
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="w-100 border-rounded">
              <img src="/Img/man.jpg" alt="A happy customer" className="w-100 rounded" />
              <h3 className="text-center pt-4">Schedule Your Journey Today</h3>
              <div className="d-flex justify-content-center align-items-center pt-4">
                <Buttons
                  text="Book Your Ride"
                  linkTo="/reservation"
                  btnStyle="btn-bg"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* <div className=" bg-info rounded">
          <h2 className="text-center pt-5">Questions? We Have Answers</h2>
          <p className="text-center fs-4 pt-3">
            Ready to experience a new standard in corporate transportation but
            unsure about something? View our frequently asked questions.
          </p>
          <div className="d-flex justify-content-center align-items-center pt-4">
            <button type="button" className="btn btn-info px-3 fs-5 mb-5">
              Make a Reservation
            </button>
          </div>
        </div> */}

        <div className="bg-primary my-5 py-5 px-4 rounded">
          <h2 className="fs-3 text-center text-white">
            Questions? We Have Answers.
          </h2>
          <p className="text-center fs-5 pt-3 text-white">
            {" "}
            Ready to experience a new standard in corporate transportation but
            unsure about something? View our frequently asked questions.
          </p>
          <div className="pt-3 d-flex justify-content-center">
            <Buttons
              text="Frequently Asked Questions"
              linkTo="/frequently-asked-questions"
              btnStyle="btn-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
